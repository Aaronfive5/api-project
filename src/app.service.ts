import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello, Welcome to my API designed by Aaron Gómez';
  }
}
