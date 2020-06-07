import * as chalk from 'chalk'
import { ShellCommand, ShellComponent } from 'nestjs-shell'

export class FirstTestCommandComponent extends ShellComponent {
  private readonly testVariable: string = 'hello there'

  @ShellCommand({
    name: 'say',
    prefix: '.',
    description: 'Sends a message to the console',
    pattern: '<sender> <@message>',
  })
  public async sayCommand(sender: string, message: string): Promise<string> {
    return `${sender} said: ${message || 'Nothing'}`
  }

  @ShellCommand({
    name: 'said',
    prefix: '/',
    description: 'Sends a message to the console that has been said',
    pattern: '<sender> [@message]',
  })
  public async saidCommand(sender: string, message: string): Promise<string> {
    return `${sender} said: ${message || 'Nothing'}`
  }

  @ShellCommand({
    name: 'screenfetch',
    prefix: '.',
    description: 'Displays screenfetch on best superb OS',
  })
  public async screenFetch(): Promise<string> {
    const colors = ['bgRed', 'bgGreen', 'bgYellow', 'bgBlue', 'bgMagenta', 'bgCyan', 'bgWhite']
    const printColors = () => colors.map((functionName) => chalk[functionName]('    ')).join('')
    const usedMemory = process.memoryUsage().heapUsed / 1024 / 1024

    // prettier-ignore
    return [
      `                                     Used MEM: ${Math.round(usedMemory * 100) / 100} MB`,
      `             _.-;;-._                OS: ${chalk.red(process.platform)}`,
      `      '-..-'|${chalk.red('...')}||${chalk.green('...')}|               V8 version: ${chalk.red(process.versions.v8)}`,
      `      '-..-'|_.-;;-._|               Node version: ${chalk.red(process.versions.node)}`,
      `      '-..-'|${chalk.blue('...')}||${chalk.white('...')}|               Time: ${chalk.red(new Date())}`,
      `      '-..-'|_.-''-._|               ${printColors()}`,
    ].join('\n')
  }
}
