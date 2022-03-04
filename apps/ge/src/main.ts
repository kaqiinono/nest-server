import { NestFactory } from '@nestjs/core';
import { GeModule } from './ge.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    GeModule,
    new FastifyAdapter(),
  );
  await app.listen(3000);
}
bootstrap();
