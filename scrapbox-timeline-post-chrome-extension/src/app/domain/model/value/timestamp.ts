class Timestamp {
  public constructor(private timestamp: string) {
    if (this.valid(timestamp)) {
      throw new Error('not Timestamp')
    }
  }

  // TODO: HH:MM:DD形式のバリデーションチェックを行う
  private valid(timestamp: string): boolean {
    return !!timestamp
  }

  public value(): string {
    return this.timestamp
  }
  // TODO: Equals相当のメソッドを定義する
}

export default Timestamp
