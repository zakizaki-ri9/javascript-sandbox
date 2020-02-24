const url = "https://connpass.com/api/v1/event/";

const connpass = (charset: string) => {
  return UrlFetchApp.fetch(url).getContentText(charset);
};

export default connpass;
