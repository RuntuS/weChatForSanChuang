// miniprogram/pages/orders/orders.js
const app =  getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contentArray : [{
      title : "电子科技大学招收撤shuoer工",
      mainContent : "电子科技大学招收撤shuoer工，欢迎打杂",
      tags : [
        {
        title:"JavaScript",
        tagClass : "cu-tag bg-blue light" 
        },
        {
        title:"IT",
        tagClass : "cu-tag bg-cyan light" 
        },
        {
        title:"兼容问题",
        tagClass : "cu-tag bg-purple light" 
        },
        {
        title:"开发",
        tagClass : "cu-tag bg-mauve light" 
        },
      ],
      who: { 
        imageUrl : "https://photo-1258955954.cos.ap-chengdu.myqcloud.com/%E4%B8%B4%E6%97%B6%E7%94%A8/headPhoto.png",
        name : "有点骚"
      },
      where : "成都市猛追湾高等职业学院",
      money : "3k-5k",
      tagClass : "",
      hasOrder : true,
      isFinish : true
    },
    {
      title : "电子科技大学招收撤shuoer工",
      mainContent : "电子科技大学招收撤shuoer工，欢迎打杂",
      tags : [
        {
        title:"JavaScript",
        tagClass : "cu-tag bg-blue light" 
        },
        {
        title:"IT",
        tagClass : "cu-tag bg-cyan light" 
        },
        {
        title:"兼容问题",
        tagClass : "cu-tag bg-purple light" 
        },
        {
        title:"开发",
        tagClass : "cu-tag bg-mauve light" 
        },
      ],
      who: { 
        imageUrl : "https://photo-1258955954.cos.ap-chengdu.myqcloud.com/%E4%B8%B4%E6%97%B6%E7%94%A8/headPhoto.png",
        name : "有点骚"
      },
      where : "成都市猛追湾高等职业学院",
      money : "3k-5k",
      tagClass : "cu-tag bg-cyan light",
      hasOrder : true,
      isFinish : false
    },
    {
      title : "电子科技大学招收撤shuoer工",
      mainContent : "电子科技大学招收撤shuoer工，欢迎打杂",
      tags : [
        {
        title:"JavaScript",
        tagClass : "cu-tag bg-blue light" 
        },
        {
        title:"IT",
        tagClass : "cu-tag bg-cyan light" 
        },
        {
        title:"兼容问题",
        tagClass : "cu-tag bg-purple light" 
        },
        {
        title:"开发",
        tagClass : "cu-tag bg-mauve light" 
        },
      ],
      who: { 
        imageUrl : "https://photo-1258955954.cos.ap-chengdu.myqcloud.com/%E4%B8%B4%E6%97%B6%E7%94%A8/headPhoto.png",
        name : "有点骚"
      },
      where : "成都市猛追湾高等职业学院",
      money : "3k-5k",
      tagClass : "cu-tag bg-cyan",
      hasOrder : true,
      isFinish : false,
    }],
    userInfoAva : ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    this.setData({
      userInfoAva : app.globalData.userInfo.avatarUrl
    })
  }

})