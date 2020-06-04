// pages/mine/mine.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isid:false,
    d1:0.01,
    d2:62,
    d3:14,
    nickName:"No name",
    gender:1,
    city:"No",
    avatarUrl:"",
    province:"",
    language:"",
    userListInfo: [ {
      icon: '../../images/upload.png',
      text: '我的发布',
      isunread: false,
      unreadNum: 0,
      goto: "upload"
    }, {
      icon: '../../images/customer_service.png',
      text: ' 客服',
      isunread: false,
      unreadNum: 0,
      goto:"CustomerService",
    
    }, {
      icon: '../../images/star.png',
      text: ' 收藏',
      goto:"favorites"
    }, {
      icon: '../../images/setting.png',
      text: ' 设置',
      goto:"settings"
    }]
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    // 查看是否授权
    var that=this;
    wx.showModal({
      content:'是否允许获取用户信息',
      success: function(res) {
        if(res.confirm){
          wx.getUserInfo({
            success: function(res) {
              console.log(res.userInfo)
              var userInfo = res.userInfo
              var nickName = userInfo.nickName
              var avatarUrl = userInfo.avatarUrl
              var gender = userInfo.gender //性别 0：未知、1：男、2：女
              var province = userInfo.province
              var city = userInfo.city
              var country = userInfo.country
              app.globalData.userInfo = userInfo;
              that.setData({
                nickName:nickName,
                avatarUrl:avatarUrl,
                isid:true
              })
            }
          })
        }
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  turnTo(event){
    let urlname = event.currentTarget.dataset.repname.goto;
    let ordername = event.currentTarget.dataset.repname.text;
    wx.navigateTo({
      url: `/pages/${urlname}/${urlname}?ordername=${ordername}`,
    })
  }
})