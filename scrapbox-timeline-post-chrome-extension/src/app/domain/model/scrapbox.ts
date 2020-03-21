import IWebPage from './interfaces'
import Timestamp from './value/timestamp'

class Scrapbox {
  private body: string
  public constructor(
    private projectName: string,
    private pageTitle: string,
    private timestamp: Timestamp,
    webPage: IWebPage
  ) {
    this.body = this.generateBody(timestamp, webPage)
  }

  public generateUrl(): string {
    return `https://scrapbox.io/${this.projectName}/${this.pageTitle}?body=${this.body}`
  }

  private generateBody(timestamp: Timestamp, webPage: IWebPage): string {
    return `${timestamp.value} - [${webPage.title} ${webPage.url.value}]`
  }
}

export default Scrapbox
