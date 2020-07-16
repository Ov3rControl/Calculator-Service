import { Injectable } from '@nestjs/common';
import average from './helpers/averageOfNumbers';

@Injectable()
export class AppService {
  addNumbers(num1: number, num2: number): number {
    return num1 + num2;
  }
  findAverage(numbersList: Array<number>): number {
    return average(numbersList);
  }
}
