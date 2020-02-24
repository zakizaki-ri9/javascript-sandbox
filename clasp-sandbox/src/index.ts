import connpass from './api'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const main = (): void => {
  console.info(connpass('utf-8'))
  console.info(connpass('shift_jis'))
}
