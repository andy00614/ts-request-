import { RequestConfig } from './type'

export default function xhr(config: RequestConfig) {
  const { data = null, url, method = 'get' } = config
  const request = new XMLHttpRequest()
  request.open(method, url, true)
  request.send()
}
