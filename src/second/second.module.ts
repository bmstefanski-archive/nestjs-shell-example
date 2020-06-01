import { Module, OnModuleInit } from '@nestjs/common'
import { ShellFacade } from 'nestjs-shell'
import { AnotherSecondTestCommandComponent } from './another-second-test.command-component'
import { SecondTestCommandComponent } from './second-test.command-component'
import { TestDependency } from './test-dependency'

@Module({})
export class SecondModule implements OnModuleInit {
  constructor(private readonly shellFacade: ShellFacade) {}

  public async onModuleInit(): Promise<void> {
    this.shellFacade.registerComponents(
      new SecondTestCommandComponent(),
      new AnotherSecondTestCommandComponent(
        new TestDependency({
          withSomeNestedThing: { andOneMoreNestingLevel: 1337 },
        }),
      ),
    )
  }
}
