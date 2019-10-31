// pages/about/about.js
Page({

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
  },
  onUnload: function(options){
    //获取首页的页面对象
    //getCurrentPages获取当前所有的活跃页面
    const pages= getCurrentPages()
    const home = pages[pages.length-2]

    home.setData({
      title:'Laiqinwei'
    })
  },
  handleBack(){
    wx.navigateBack({
      
    })
  }
})