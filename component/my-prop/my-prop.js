// component/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  //  title: String,
    title: {
      type: String,
      value: '默认标题',
      observer: function(newVal,oldVal){ //观察是否发生改变
        console.log(newVal,oldVal)
      }
    },
    content: String
  },
  externalClasses:['titlecolor'],
})


//title: String没有默认值,不给值是为空
