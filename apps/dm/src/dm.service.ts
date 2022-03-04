import { Injectable } from '@nestjs/common';

@Injectable()
export class DmService {
  getHello(): string {
    return 'Hello World!';
  }
}
