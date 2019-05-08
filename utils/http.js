import {config} from '../app.js'
class Http {
  request(params) {
    console.log(params)
    console.log(config.base_url + params.url)
    if (!params.method) {
      params.method = 'GET'
    }
    return new Promise((resolve, reject) => {
      wx.request({
        url: config.base_url + params.url,
        method: params.method,
        data: params.data,
        header: {
          'content-type': 'application/json',
        },
        success: res => {
          resolve(res)
        },
        fail: err => {
          reject(err)
        }
      })
    })
  }
}
export {
  Http
}