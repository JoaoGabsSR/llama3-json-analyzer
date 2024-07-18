import {
  Controller,
  FileTypeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { JsonService } from './json.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('json')
export class JsonController {
  constructor(private readonly json: JsonService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [new FileTypeValidator({ fileType: 'application/json' })],
      }),
    )
    file: Express.Multer.File,
  ) {
    return this.json.jsonAnalyzer(file);
  }
}
