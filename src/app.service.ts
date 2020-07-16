import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  addNumbers(num1: number, num2: number): number {
    return num1 + num2;
  }
}
