import { RequestConfig } from './type'
import xhr from './xhr'
// test
function Request(config: RequestConfig) {
  xhr(config)
}

export default Request
