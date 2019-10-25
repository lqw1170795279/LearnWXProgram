// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles:['衣服','裤子','帽子']
  },
  handleBtnClick(){

  },
  handleTouchStart(){
    console.log('handleTouchStart')
  },
  handleTouchMove() {
    console.log('handleTouchMove')
  },
  handleTouchEnd() {
    console.log('handleTouchEnd')
  },
  handleTap() {
    console.log('handleTap')
  },
  handleLongPress() {
    console.log('handleLongPress')
  },
  handleEventClick(event){
    console.log('-------',event)
  },
  handleOuter(event){
    console.log(event)
  },
  handleInner(event){
    console.log(event)
  },
  handleItem(event){
    //获取item和index
    //console.log(event)
    const dataset = event.currentTarget.dataset;
    const title = dataset.item;
    const index = dataset.index;
    console.log(title,index)
  },
  handleCaptureBig(){
    console.log('handleCaptureBig')
  },
  handleCaptureMid() {
    console.log('handleCaptureMid')
  },
  handleCaptureMini() {
    console.log('handleCaptureMini')
  },
  handBindBig() {
    console.log('handBindBig')
  },
  handBindMid() {
    console.log('handBindMid')
  },
  handBindMini() {
    console.log('handBindMini')
  }
})
// type:事件类型 timeStamp:时间戳,经历了多久 target:产生事件的对象的组件的属性 currentTarget:也包含产生事件的对象的属性 detail:点击位置距离页面左上角的距离坐标 touches:记录触摸点的信息 changeTouches:记录所有的手指触摸点
//touches:记录有几根手指在触摸
//chengeTouches:记录增加的或减少的手指数
//currentTarget:记录触发事件的view
//target:记录产生事件的view