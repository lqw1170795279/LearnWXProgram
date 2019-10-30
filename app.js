const TOKEN = 'token'



App({
  globalData: {
    token: ''
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    //先从缓存中取出token
    const token = wx.getStorageSync(TOKEN)
    //判断token是否有值
    if(token && token.length != 0){
      //已经有token,则验证token是否过期
      this.check_token(token)
    }else{
      //没有token,则进行登录
      this.login()
    }
  },
  login(){
    //登录
    console.log('登录')
    wx.login({
      
      //code有效期只有五分钟
      success: (res) => {
        console.log(res)
        //1.获取code
        const code = res.code;

        //2.将code发送给自己的服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code
          },
          success: (res) => {
            //1.取出token
            const token = res.data.token;

            //2.将token保存在globalData中
            this.globalData.token = token;

            //  console.log(this.globalData.token)
            //3.进行本地存储setStorageSync同步
            wx.setStorageSync(TOKEN, token)
          }
        })
      }
    })
  },
  check_token(token){
    console.log('验证')
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'post',
      header: {
        token
      },
      success: (res)=>{
        if( !res.data.errCode){
          //token有效
          console.log('token有效')
            this.globalData.token=token;
        }else{
          this.login()
        }
      },
      fail: (err)=>{
        console.log(err)
      }
    })
  }
})
