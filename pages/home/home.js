// pages/home/home.js
Page({
  data:{
    title:'lqw'
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
  },
  handlePushAbout(){
    wx.navigateTo({
      url: '/pages/about/about',
    })
  }
})