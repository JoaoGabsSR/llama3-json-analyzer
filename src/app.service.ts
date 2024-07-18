import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  verifyIfAppIsRunning(): string {
    const port = process.env.PORT;

    return JSON.stringify(`The application is running on port: ${port}`);
  }
}
