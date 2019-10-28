// component/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    //字体变色的下标
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemClick(event){
    //1.取出index，点击获取的编号是衣服,裤子,还是鞋子
    const index = event.currentTarget.dataset.index;
    //2.传递要变色的字体下标
    this.setData({
      currentIndex:index
    })
    //3.通知页面内部的点击事件
    this.triggerEvent('itemClick',
    {index,title: this.properties.titles[index]},{});
    }
  }
})
