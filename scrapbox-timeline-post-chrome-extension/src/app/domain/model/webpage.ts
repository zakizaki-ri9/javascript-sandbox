import IWebPage from './interfaces'
import UrlString from './value/urlString'

class WebPage implements IWebPage {
  title: string
  url: UrlString
  public constructor(title: string, url: UrlString) {
    this.title = title
    this.url = url
  }
}

export default WebPage
