import { Test, TestingModule } from '@nestjs/testing';
import { DmController } from './dm.controller';
import { DmService } from './dm.service';

describe('DmController', () => {
  let dmController: DmController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DmController],
      providers: [DmService],
    }).compile();

    dmController = app.get<DmController>(DmController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(dmController.getHello()).toBe('Hello World!');
    });
  });
});
