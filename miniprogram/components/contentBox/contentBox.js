

Component({
  behaviors: [],
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innertext: {
      type : Object,
      contentArray: {}
    }
  },
  data: {
    // 这里是一些组件内部数据
    fromUpData : [],
    height : "300rpx",
    finishStatus : "",
    finishClass : ""
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function(){}
  },
  lifetimes: {

    attached(){
      let height = "300rpx" ,
      finishStatus = "",
      finishClass = ""
    
      if(this.properties.innertext.hasOrder){
        height = "230rpx";
        // 要获得订单后才能判断是否完成
        if(this.properties.innertext.isFinish){
          finishStatus = "已完成";
          finishClass = "text-cyan";
        }else{
          finishStatus = "未完成";
          finishClass = "text-orange";
        }
      }
      this.setData({
        height : height,
        finishStatus : finishStatus,
        finishClass : finishClass
      })
    }
  }
})