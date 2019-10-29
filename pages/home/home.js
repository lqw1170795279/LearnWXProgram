// pages/home/home.js
//相对路径
import request from '../../service/network.js'

Page({
  data: {

  },
  // onLoad: function (options) {
  //   //发送网络请求
  //   //1.最简单的get请求
  //   // wx.request({
  //   //   //url请求要先配置
  //   //   url: 'http://123.207.32.32:8080/home/data',
  //   //   success: function(res){
  //   //     console.log(res)-0
  //   //   }
  //   // })
  //   // //2.get请求但带参数
  //   // wx.request({
  //   //   url: 'http://123.207.32.32:8080/home/data',
  //   //   data:{
  //   //     type: 'sell',
  //   //     page: 1
  //   //   },
  //   //   success: function (res) {
  //   //     console.log(res)
  //   //   }
  //   // })
  //   //post请求,且带参数
  //   // wx.request({
  //   //   url: 'http://httpbin.org/post',
  //   //   method: 'post',
  //   //   data:{
  //   //     name: 'laiqinwei',
  //   //     age:25
  //   //   },
  //   //   success: function(res){
  //   //     console.log(res)
  //   //   },
  //   //   fail: function(err){
  //   //     console.log(err)
  //   //   }
  //   // })
  //   //把url请求封装成工具类的原因
  //   //1.封装工具类可以降低wx.request的耦合度
  //   //2.使用Promise的方法获取回调结果
  // }
  onLoad: function(options){
    //-----------原生的方式发送网络请求----------------
    this.get_data_origin()

    //2.通过使用封装的request发送请求
    //Promise最大的好处就是防止出现回调地狱
    request({
      url: 'http://httpbin.org/post',
    
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  },
  get_data_origin(){
      //发送网络请求
    //1.最简单的get请求
    // wx.request({
    //   //url请求要先配置
    //   url: 'http://123.207.32.32:8080/home/data',
    //   success: function(res){
    //     console.log(res)-0
    //   }
    // })
    // //2.get请求但带参数
    // wx.request({
    //   url: 'http://123.207.32.32:8080/home/data',
    //   data:{
    //     type: 'sell',
    //     page: 1
    //   },
    //   success: function (res) {
    //     console.log(res)
    //   }
    // })
    //post请求,且带参数
    // wx.request({
    //   url: 'http://httpbin.org/post',
    //   method: 'post',
    //   data:{
    //     name: 'laiqinwei',
    //     age:25
    //   },
    //   success: function(res){
    //     console.log(res)
    //   },
    //   fail: function(err){
    //     console.log(err)
    //   }
    // })
    //把url请求封装成工具类的原因
    //1.封装工具类可以降低wx.request的耦合度
    //2.使用Promise的方法获取回调结果
  }
})