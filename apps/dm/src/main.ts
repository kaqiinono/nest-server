import { NestFactory } from '@nestjs/core';
import { DmModule } from './dm.module';

async function bootstrap() {
  const app = await NestFactory.create(DmModule);
  await app.listen(3001);
}
bootstrap();
