import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('paneles')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

}
