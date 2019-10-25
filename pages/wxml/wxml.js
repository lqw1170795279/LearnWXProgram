// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mustache:"你好",
    firstName:"bruce",
    lastName:"marker",
    age: 12,
    nowTime:new Date().toLocaleString(),
    isChange: false,
    isShow: false,
    score: 45,
    movies:['大圣归来','哪吒归来','咸鱼回来'],
    nums:[
      [11,23,12,41],
      [90,21,44,15],
      [75,32,41,55]
    ]
    
  },
  onLoad(){
    setInterval(()=>{
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    },1000)
  },
  handleClick(){
    this.setData({
      isChange: !this.data.isChange
    })
  },
  handleSwitchShow(){
    this.setData({
      isShow: !this.data.isShow
    })
  },
  handleIncrement(){
    this.setData({
      score:this.data.score + 10
    })
  },
  handleReduce(){
    this.setData({
      score: this.data.score - 10
    })
  }
})