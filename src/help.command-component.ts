import * as chalk from 'chalk'
import { ShellCommand, ShellComponent, ShellFacade } from 'nestjs-shell'

export class HelpCommandComponent extends ShellComponent {
  constructor(private readonly shellFacade: ShellFacade) {
    super()
  }

  @ShellCommand({ name: 'help', prefix: '.' })
  public async helpCommand(): Promise<string> {
    return [
      'Here are all available commands: ',
      chalk.underline('-------------------------------------'),
      ...this.shellFacade.getAllCommands().map((command) => {
        return `-> ${command.name} ${command.pattern} - ${chalk.green(
          command.description || 'Description not available',
        )}`
      }),
      chalk.underline('-------------------------------------'),
    ].join('\n')
  }
}
