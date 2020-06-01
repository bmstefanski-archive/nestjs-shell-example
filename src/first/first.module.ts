import { Module, OnModuleInit } from '@nestjs/common'
import { ShellFacade } from 'nestjs-shell'
import { FirstTestCommandComponent } from './first-test.command-component'

@Module({})
export class FirstModule implements OnModuleInit {
  constructor(private readonly shellFacade: ShellFacade) {}

  public onModuleInit(): void {
    this.shellFacade.registerComponents(new FirstTestCommandComponent())
  }
}
