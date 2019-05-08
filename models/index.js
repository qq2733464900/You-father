import {Http} from '../utils/http.js'
let _http = new Http()
class IndexModel  {
  api1(data,callback){
    console.log(data)
   _http.request({
      method:"POST",
      url:'/article/shoplist',
      data:data
    }).then(res=>{
      callback(res)
    })
  }
}
export {IndexModel}