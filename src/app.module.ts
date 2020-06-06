import { Module, OnApplicationBootstrap } from '@nestjs/common'
import * as chalk from 'chalk'
import { ShellFacade, ShellModule } from 'nestjs-shell'
import { AppController } from './app.controller'
import { FirstModule } from './first/first.module'
import { HelpCommandComponent } from './help.command-component'
import { SecondModule } from './second/second.module'

@Module({
  imports: [ShellModule, FirstModule, SecondModule],
  controllers: [AppController],
})
export class AppModule implements OnApplicationBootstrap {
  constructor(private readonly shellFacade: ShellFacade) {}

  public async onApplicationBootstrap(): Promise<void> {
    await this.shellFacade.bootstrap({
      prompt: chalk.red('⤳'),
      messages: {
        notFound: chalk.bgGreen.black.bold(' Sorry, there is no such command as $input '),
        wrongUsage: chalk.yellow.bold(`Wrong usage: $command ${chalk.red('$pattern')}`),
      },
      shellPrinter: (value) => console.log(value),
    })

    this.shellFacade.registerComponents(new HelpCommandComponent(this.shellFacade))
  }
}
