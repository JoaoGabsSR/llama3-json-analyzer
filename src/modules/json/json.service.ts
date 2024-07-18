import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable()
export class JsonService {
  constructor(private readonly http: HttpService) {}

  async jsonAnalyzer(file: Express.Multer.File): Promise<any> {
    const jsonContent = file.buffer.toString('utf-8');
    const data = JSON.parse(jsonContent);

    const responseForPrompt = await this.getResponseForJson(data);
    const convertedResponse = responseForPrompt.response.toString();

    return { response: convertedResponse };
  }

  private async getResponseForJson(json: any): Promise<any> {
    const response: Observable<AxiosResponse<any, any>> = await this.http.post(
      'http://localhost:11434/api/generate',
      {
        model: 'llama3',
        prompt: `${json.prompt}: ${json.data}`,
        stream: false,
      },
    );

    const responseData = await firstValueFrom(response);
    return responseData.data;
  }
}
