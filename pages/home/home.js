// pages/home/home.js
Page({
  data:{
    name: 'Laiqinwei',
    age: 25,
    students:[
      {name:'liu',age:'32'},
      {name: 'lis', age: '31' },
      {name: 'lie', age: '12' },
      {name: 'lic', age: '41' }
    ],
    counter: 0
  },
  handleBtnClick()
  {
    //1.界面不会刷新
    // this.data.counter +=1;
    // console.log(this.data.counter)

    //2.this.setData()
    this.setData({
      counter:this.data.counter+1
    })
  },
  handleSubtraction() {
    this.setData({
      counter: this.data.counter - 1
    })
  }

})