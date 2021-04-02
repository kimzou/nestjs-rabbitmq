import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('login')
  login(data: string) {
    console.log({ data })
  }

  @EventPattern('log')
  log(data: string) {
    console.log({ data })
  }

  @EventPattern('hello')
  hello(data: string) {
    console.log({ data })
  }
}
