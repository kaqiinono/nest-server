import { Module } from '@nestjs/common';
import { JsfController } from './jsf.controller';
import { JsfService } from './jsf.service';

@Module({
  imports: [],
  controllers: [JsfController],
  providers: [JsfService],
})
export class JsfModule {}
