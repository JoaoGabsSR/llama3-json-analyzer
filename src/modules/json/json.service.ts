import { HttpService } from "@nestjs/axios";
import { BadRequestException, Injectable } from "@nestjs/common";
import Ajv, { JSONSchemaType, ValidateFunction } from "ajv";
import { AxiosResponse } from "axios";
import { firstValueFrom, Observable } from "rxjs";
import { IJSONAnalyzerReturn } from "./interfaces/json-analyzer.interface";

@Injectable()
export class JsonService {
  constructor(private readonly http: HttpService) {}

  private async getResponseForJson(json: any): Promise<any> {
    const response: Observable<AxiosResponse<any, any>> = await this.http.post(
      "http://localhost:11434/api/generate",
      {
        model: "llama3",
        prompt: `${json.prompt}: ${json.data}`,
        stream: false,
      }
    );

    const responseData = await firstValueFrom(response);
    return responseData.data;
  }

  private validateJsonShape(file: Express.Multer.File): boolean {
    const ajv: Ajv = new Ajv();

    interface IJsonSchemaShape {
      prompt: string;
      data: string;
    }

    const jsonSchemaShape: JSONSchemaType<IJsonSchemaShape> = {
      type: "object",
      properties: {
        prompt: { type: "string" },
        data: { type: "string" },
      },
      required: ["prompt", "data"],
      additionalProperties: false,
    };

    const validate: ValidateFunction<IJsonSchemaShape> = ajv.compile(jsonSchemaShape);
    const isValid: boolean = validate(file);

    return isValid;
  }

  async jsonAnalyzer(file: Express.Multer.File): Promise<IJSONAnalyzerReturn> {
    const jsonContent: string = file.buffer.toString("utf-8");
    const data: any = JSON.parse(jsonContent);

    const isJSONValidShape: boolean = this.validateJsonShape(data);

    if (!isJSONValidShape) throw new BadRequestException("Invalid JSON format");

    const responseForPrompt: any = await this.getResponseForJson(data);
    const convertedResponse: string = responseForPrompt.response.toString();

    return { response: convertedResponse };
  }
}
