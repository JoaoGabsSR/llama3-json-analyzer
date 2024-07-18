import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JsonModule } from './modules/json/json.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [JsonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
