// pages/view_order/view_order.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    orders: [
      {
        type: "blue"
      },
      {
        type: "red"
      },
      {
        type: "green"
      }
    ]
  },
  random() {
    this.setData({
      orders: shuffle(this.data.orders)
    });
    console.log(this.data.orders);
    function shuffle(arr) {
      let _arr = arr.slice();
      for (let i = 0; i < _arr.length; i++) {
        let j = getRandomInt(0, i);
        let t = _arr[i];
        _arr[i] = _arr[j];
        _arr[j] = t;
      }
      return _arr;
    }
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  },
  onLoad: function(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
});
