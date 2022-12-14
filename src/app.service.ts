import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello World! ---- env: ${process.env.MONGODB_URL || 'None'}`;
  }
}
