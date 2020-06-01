export class TestDependency {
  constructor(
    public readonly someData: {
      withSomeNestedThing: { andOneMoreNestingLevel: number }
    },
  ) {}
}
