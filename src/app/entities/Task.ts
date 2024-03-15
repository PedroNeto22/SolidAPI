export default class Task {
  constructor(
    public readonly title: string,
    public readonly body: string,
    public readonly status: string,
    public readonly priority: string,
    public readonly userId: number | null,
  ) {}
}
