import { Test, TestingModule } from '@nestjs/testing';
import { JsfController } from './jsf.controller';
import { JsfService } from './jsf.service';

describe('JsfController', () => {
  let jsfController: JsfController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [JsfController],
      providers: [JsfService],
    }).compile();

    jsfController = app.get<JsfController>(JsfController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(jsfController.getHello()).toBe('Hello World!');
    });
  });
});
