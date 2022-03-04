import { Injectable } from '@nestjs/common';

@Injectable()
export class JsfService {
  getHelloMessage(name: string): string {
    return `Hello ${name}!`;
  }
}
