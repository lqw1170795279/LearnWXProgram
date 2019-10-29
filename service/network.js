//把url请求封装成工具类的原因
//1.封装工具类可以降低wx.request的耦合度
//2.使用Promise的方法获取回调结果

export default function request(options){
  return new Promise((resolve,reject)=>{
    wx.request({
      url: options.url,
      method: options.method || 'get',
      data: options.data || {},
      success: function (res) {
        resolve(res)
      },
      fail: function (err) {
        reject(err)
      }
    })
  })  
}