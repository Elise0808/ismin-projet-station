import { Test, TestingModule } from '@nestjs/testing';
import { StationController } from './station.controller';
import { StationService } from './station.service';

describe('AppController', () => {
  let appController: StationController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [StationController],
      providers: [StationService],
    }).compile();

    appController = app.get<StationController>(StationController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
