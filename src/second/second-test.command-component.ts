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
    name: 'howdy',
    prefix: '/',
    description: `Prints howdy in the shell and everybody's happy`,
    pattern: '<name>',
  })
  public async howdyCommand(name: string): Promise<string> {
    return `howdy ${name}`
  }
}
