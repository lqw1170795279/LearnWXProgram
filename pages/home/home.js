// pages/home/home.js
Page({
  showToast(){
    wx.showToast({
      title: '加载中...',
      duration: 3000,
      icon: "loading",
      mask: true,
      success: function(res){
        console.log(res)
      },
      fail: function(err){
        console.log('2')
      },
      complete: function(){
        console.log('3')
      }
    })
  },
  showModal(){
    wx.showModal({
      title: 'showModal',
      content: 'showModal-content',
      // showCancel: false,
      cancelText: '退出',
      cancelColor: 'red',
      confirmColor: 'green',
      success(res){
        if(res.confirm){
          console.log('点击确定')
        }else if(res.cancel){
          console.log('点击取消')
        }
      }
    })
  },
  showLoading(){
    wx.showLoading({
      title: 'showLoading',
    })

    setTimeout(function(){
      wx.hideLoading()
    },2000)
  },
  showActionSheet(){
    wx.showActionSheet({
      itemList: ['1','2','3'],
      success(res){
        console.log(res.tapIndex)
      },
      fail(res){
        console.log(res.errMsg)
      }
    })
  }
})