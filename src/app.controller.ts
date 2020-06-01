import { Controller, Get } from '@nestjs/common'

@Controller()
export class AppController {
  @Get()
  public getHello(): string {
    return `Hello world! I am working and I didn't get blocked by powerful nestjs-shell library!`
  }
}
