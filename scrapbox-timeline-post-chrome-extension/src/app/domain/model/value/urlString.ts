class UrlString {
  public constructor(private url: string) {
    if (this.valid(url)) {
      throw new Error('not Url')
    }
  }

  private valid(url: string): boolean {
    return /^(http|https):\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/.test(url)
  }

  public value(encoding = true): string {
    return encoding ? encodeURI(this.url) : this.url
  }
  // TODO: Equals相当のメソッドを定義する
}

export default UrlString
