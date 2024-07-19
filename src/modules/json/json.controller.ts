import {
  Controller,
  FileTypeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JsonService } from './json.service';

@Controller('json')
export class JsonController {
  constructor(private readonly json: JsonService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({ fileType: 'application/json' }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    return this.json.jsonAnalyzer(file);
  }
}
