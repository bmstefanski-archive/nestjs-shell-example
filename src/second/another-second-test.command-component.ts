import { ShellCommand, ShellComponent } from 'nestjs-shell'
import { TestDependency } from './test-dependency'

export class AnotherSecondTestCommandComponent extends ShellComponent {
  constructor(private readonly testDependency: TestDependency) {
    super()
  }

  @ShellCommand({
    name: 'hello',
    prefix: '!',
    description: 'Displays secret message in the shell',
    pattern: '',
  })
  public async hello(): Promise<string> {
    return JSON.stringify(this.testDependency)
  }
}
