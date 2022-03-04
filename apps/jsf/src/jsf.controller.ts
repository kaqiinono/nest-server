import { Controller, Get } from '@nestjs/common';
import { JsfService } from './jsf.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class JsfController {
  constructor(private readonly jsfService: JsfService) {}
  @MessagePattern({ cmd: 'getHelloX' })
  getHelloMessage(name: string): string {
    return this.jsfService.getHelloMessage(name);
  }
}
