import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('Add Numbers', () => {
    it('should return sum of 2 numbers', () => {
      expect(appController.addNumbers(1, 2)).toBe(3);
    });
  });

  describe('Find Average', () => {
    it('should return the average number', () => {
      expect(appController.findAverage([1, 2, 3, 4, 5])).toBe(3);
    });
  });
});
