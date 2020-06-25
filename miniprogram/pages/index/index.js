// miniprogram/pages/index/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    blocks : [{
      name : "IT行业",
      classConfig : "bg-cyan padding radius text-center light"
    },{
      name : "金融",
      classConfig : "bg-blue padding radius text-center light"
    },{
      name : "线下",
      classConfig : "bg-yellow padding radius text-center light"
    },{ 
      name : "其他" , 
      classConfig : "bg-orange padding radius text-center light"
    }],
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://photo-1258955954.cos.ap-chengdu.myqcloud.com/%E5%8D%9A%E5%AE%A2%E8%AE%BE%E7%BD%AE%E5%9B%BE%E7%89%87/background.jpg'
    }, {
      id: 1,
        type: 'image',
        url: 'https://photo-1258955954.cos.ap-chengdu.myqcloud.com/%E5%8D%9A%E5%AE%A2%E8%AE%BE%E7%BD%AE%E5%9B%BE%E7%89%87/background.jpg',
    }, {
      id: 2,
      type: 'image',
      url: 'https://photo-1258955954.cos.ap-chengdu.myqcloud.com/%E5%8D%9A%E5%AE%A2%E8%AE%BE%E7%BD%AE%E5%9B%BE%E7%89%87/background.jpg'
    }, {
      id: 3,
      type: 'image',
      url: 'https://photo-1258955954.cos.ap-chengdu.myqcloud.com/%E5%8D%9A%E5%AE%A2%E8%AE%BE%E7%BD%AE%E5%9B%BE%E7%89%87/background.jpg'
    }, {
      id: 4,
      type: 'image',
      url: 'https://photo-1258955954.cos.ap-chengdu.myqcloud.com/%E5%8D%9A%E5%AE%A2%E8%AE%BE%E7%BD%AE%E5%9B%BE%E7%89%87/background.jpg'
    }, {
      id: 5,
      type: 'image',
      url: 'https://photo-1258955954.cos.ap-chengdu.myqcloud.com/%E5%8D%9A%E5%AE%A2%E8%AE%BE%E7%BD%AE%E5%9B%BE%E7%89%87/background.jpg'
    }, {
      id: 6,
      type: 'image',
      url: 'https://photo-1258955954.cos.ap-chengdu.myqcloud.com/%E5%8D%9A%E5%AE%A2%E8%AE%BE%E7%BD%AE%E5%9B%BE%E7%89%87/background.jpg'
    }],
    cardCur: 0,
    contentArray : [{
      title : "平台UI设计",
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
        tagClass : "cu-tag bg-mauve light" ,
        hasOrder :  false,
        isFinish :  false
        },
      ],
      who: { 
        imageUrl : "https://photo-1258955954.cos.ap-chengdu.myqcloud.com/%E4%B8%B4%E6%97%B6%E7%94%A8/headPhoto.png",
        name : "有点骚"
      },
      where : "成都市猛追湾高等职业学院",
      money : "3k-5k",
      tagClass : ""
    },
    {
      title : "平台UI设计",
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
      hasOrder :  false,
      isFinish :  false
    },
    {
      title : "平台UI设计",
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
      hasOrder :  false,
      isFinish :  false
    }],
    location : "",
    userInfoAva : ""

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    var that = this;
    this.towerSwiper('swiperList');
    wx.getLocation({
      altitude: 'true',
      success(res){
        wx.showLoading({
          title: '正在获取你的位置',
        })
        console.log(res);
        wx.request({
          url: `https://apis.map.qq.com/ws/geocoder/v1/?location=${res.latitude},${res.longitude}&key=YYZBZ-D2P33-VPD3O-YYY3W-7UGGJ-RFBKQ`,
          success(res){
            wx.hideLoading({
              success: (res) => {
                
              },
            })
            console.log(res);
            that.setData({
              location : res.data.result.formatted_addresses.recommend,
              userInfoAva : app.globalData.userInfo.avatarUrl
            })
          }
         })
        }
    })
  },
  DotStyle(e) {
    this.setData({
      DotStyle: e.detail.value
    })
  },
  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  // towerSwiper
  // 初始化towerSwiper
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
  // towerSwiper触摸开始
  towerStart(e) {
    this.setData({
      towerStart: e.touches[0].pageX
    })
  },
  // towerSwiper计算方向
  towerMove(e) {
    this.setData({
      direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
    })
  },
  // towerSwiper计算滚动
  towerEnd(e) {
    let direction = this.data.direction;
    let list = this.data.swiperList;
    if (direction == 'right') {
      let mLeft = list[0].mLeft;
      let zIndex = list[0].zIndex;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft;
      list[list.length - 1].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    } else {
      let mLeft = list[list.length - 1].mLeft;
      let zIndex = list[list.length - 1].zIndex;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft;
      list[0].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    }
  },


  toDetailedPage(event){
    console.log(event.target);
  }


})