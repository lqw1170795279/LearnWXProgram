// pages/home/home.js
Page({
  data:{
    counter:0
  },
  handleIncrement(){
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleTabClick(event){
    console.log(event)
  },
  handleIncrementCpn(){
  // console.log('主页修改组件内的数据')
  //最终目的->修改组件内的数据
  //1.获取组件对象selectComponent('.class/#id')
  const my_sel=this.selectComponent('#sel-id')
  //验证是否是想要的对象 console.log(my_sel)
  //2.使用对象修改数据
  // my_sel.setData({
  //   counter: my_sel.data.counter + 10
  // })
  //3.通过方法接口修改数据
  my_sel.incrementCounter(10)

  }
})