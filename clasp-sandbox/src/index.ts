import connpass from "./api";

const main = () => {
  console.info(connpass("utf-8"));
  console.info(connpass("shift_jis"));
};
