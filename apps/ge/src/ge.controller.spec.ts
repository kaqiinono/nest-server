import { Test, TestingModule } from '@nestjs/testing';
import { GeController } from './ge.controller';
import { GeService } from './ge.service';

describe('GeController', () => {
  let geController: GeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GeController],
      providers: [GeService],
    }).compile();

    geController = app.get<GeController>(GeController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(geController.getHello()).toBe('Hello World!');
    });
  });
});
