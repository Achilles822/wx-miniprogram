//获取应用实例
var app = getApp();

Page({
  data: {
    showPop: false,
    animationData: {},
    ballDisplay: false,
    top: 0,
    left: 0,
    originTop: 0,
    originLeft: 0
  },
  onShow() {
    // 获取小球最开始的位置
    this.initBallPos();
    this.start = false;
  },
  onReady() {},
  // 显示底部弹层
  showModal: function() {
    var _this = this;
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: "ease",
      delay: 0
    });
    _this.animation = animation;
    animation.translateY(300).step();
    _this.setData({
      animationData: animation.export(),
      showPop: true
    });
    setTimeout(
      function() {
        animation.translateY(0).step();
        _this.setData({
          animationData: animation.export()
        });
      }.bind(_this),
      50
    );
  },
  // 隐藏底部弹层
  hideModal: function() {
    var _this = this;
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: "ease",
      delay: 0
    });
    _this.animation = animation;
    animation.translateY(300).step();
    _this.setData({
      animationData: animation.export()
    });
    setTimeout(
      function() {
        animation.translateY(0).step();
        _this.setData({
          animationData: animation.export(),
          showPop: false
        });
      }.bind(this),
      200
    );
  },
  // 加入购物车动画
  addCart() {
    let that = this;
    // 禁止动画多次触发
    if (this.start) {
      return;
    }
    this.start = true;
    this.setData({
      ballDisplay: true
    });
    // 获取小球终点位置
    this.getRects(".after-position").then(rect => {
      this.setData({
        top: `${rect.top + 16}px`,
        left: `${rect.left + 16}px`
      });
      // 延时跟动画时长一致，飞完隐藏掉，再把小球重置到初始位置。
      let { originLeft, originTop } = this.data;
      setTimeout(() => {
        that.setData({
          ballDisplay: false,
          top: originTop,
          left: originLeft
        });
        that.start = false;
      }, 1000);
    });
  },
  getRects(cls) {
    return new Promise((resolve, reject) => {
      wx.createSelectorQuery()
        .in(this)
        .select(cls)
        .boundingClientRect(function(rect) {
          console.log(rect);
          resolve(rect);
        })
        .exec();
    });
  },
  initBallPos() {
    this.getRects(".before-position").then(rect => {
      this.setData({
        top: `${rect.top + 5}px`,
        left: `${rect.left + 30}px`,
        originTop: `${rect.top + 5}px`,
        originLeft: `${rect.left + 30}px`
      });
    });
  }
});
