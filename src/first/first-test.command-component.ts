import { ShellCommand, ShellComponent } from 'nestjs-shell'

export class FirstTestCommandComponent extends ShellComponent {
  private readonly testVariable: string = 'hello there'
  private readonly secondTestVariable: string = 'howdy'

  constructor() {
    super()
  }

  @ShellCommand({
    name: 'test',
    prefix: '.',
    description: 'Test command',
    pattern: '<name> [@surname]',
  })
  public async testCommand(surname: string, name: string): Promise<string> {
    return `\n
      Your name is ${name} and your surname is ${surname}. \n
      And these are the instance variables: ${Reflect.ownKeys(this)}. \n
      Test variable value: ${this.testVariable} \n
    `
  }
}
