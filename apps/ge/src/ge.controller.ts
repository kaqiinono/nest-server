import { Controller, Get, Param } from '@nestjs/common';
import { GeService } from './ge.service';

@Controller()
export class GeController {
  constructor(private readonly geService: GeService) {}

  @Get(':name')
  getHello(@Param() params) {
    return this.geService.getHelloMessage(params.name);
  }
}