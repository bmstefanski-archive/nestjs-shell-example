import * as chalk from 'chalk'
import { ShellCommand, ShellComponent } from 'nestjs-shell'

export class SecondTestCommandComponent extends ShellComponent {
  @ShellCommand({
    name: 'hi',
    prefix: '/',
    description: 'Prints hi in the shell',
    pattern: '[name]',
  })
  public async hiCommand(name: string): Promise<string> {
    return `hi ${name}`
  }

  @ShellCommand({
    name: 'colors',
    prefix: '-',
    description: `Random colors`,
  })
  public async colors(): Promise<string> {
    const colors = [
      'bgRed',
      'bgGreen',
      'bgYellow',
      'bgBlue',
      'bgMagenta',
      'bgCyan',
      'bgWhite',
      'bgRedBright',
      'bgGreenBright',
      'bgYellowBright',
      'bgBlueBright',
      'bgMagentaBright',
      'bgCyanBright',
      'bgWhiteBright',
    ]

    // Look, it's moving. It's alive, it's alive, it's alive.
    // It's moving. It's alive, it's alive, it's alive, it's alive, it's alive!
    return Array.from(Array(5))
      .map((_, index) =>
        colors
          .sort(() => Math.random() - 0.5)
          .map((functionName) => chalk[functionName]('    '))
          [index % 2 === 0 ? 'reverse' : 'slice']()
          .join(''),
      )
      .join('\n')
  }
}
