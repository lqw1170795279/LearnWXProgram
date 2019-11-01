// pages/home/home.js
import{
  getMultiData
}from '../../service/home.js'


Page({

  data: {
    banners: [],
    recommends: [],
    titles: ['流行', '新款', '精选' ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //1.请求轮播图及推荐数据
    getMultiData().then(res=>{
    //2.取出轮播图和推荐数据
    //console.log(res)
    const banners = res.data.data.banner.list;
    const recommends =res.data.data.recommend.list;
    //3.将banners和recommends发到data
    this.setData({
      banners: banners,
      recommends: recommends
    })
    })
  },
  handleTabClick(event){
    //console.log(event)
    //取出index
    const index=event.detail.index;
    console.log(index);
  }
})