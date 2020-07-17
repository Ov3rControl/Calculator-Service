import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
  ParseArrayPipe,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/api/v1/add/:num1/:num2')
  addNumbers(
    @Param('num1', ParseIntPipe) num1: number,
    @Param('num2', ParseIntPipe) num2: number,
  ): number {
    return this.appService.addNumbers(num1, num2);
  }

  @Post('/api/v1/average')
  findAverage(
    @Body(new ParseArrayPipe({ items: Number, separator: ',' }))
    numbersList: number[],
  ): number {
    return this.appService.findAverage(numbersList);
  }
}
