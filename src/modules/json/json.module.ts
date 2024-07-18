import { Module } from '@nestjs/common';
import { JsonController } from './json.controller';
import { JsonService } from './json.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [JsonController],
  providers: [JsonService],
  exports: [JsonService],
  imports: [HttpModule],
})
export class JsonModule {}
