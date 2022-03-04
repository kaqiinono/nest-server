import { Controller, Get } from '@nestjs/common';
import { DmService } from './dm.service';

@Controller()
export class DmController {
  constructor(private readonly dmService: DmService) {}

  @Get()
  getHello(): string {
    return this.dmService.getHello();
  }
}
