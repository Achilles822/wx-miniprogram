// pages/loadmore/loadmore.js
const CONFIG = require("../../base_config.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasMore: true,
    pageIndex: 1,
    listData: [],
    isHideLoadMore: false,
    canLoad: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.initData()
  },
  bindscrolltolow: function() {
    console.log('onReachBottom')
    if (this.data.canLoad) {
      console.log('loading more data')
      this.loadMore()
    }
  },
  initData() {
    let that = this
    wx.request({
      url: CONFIG.base_config.base_url + '/book/index',
      data: {
        pageIndex: this.data.pageIndex
      },
      success: function(res) {
        console.log(res)
        that.setData({
          listData: res.data.data.list
        })
      },
      fail: function(res) {
        console.log(res)
      }
    })
  },
  loadMore() {
    let that = this
    let hasMore = this.data.hasMore
    if (hasMore) {
      let pageIndex = this.data.pageIndex + 1
      this.setData({
        isHideLoadMore: true,
        canLoad: false
      })
      setTimeout(() => {
        wx.request({
          url: CONFIG.base_config.base_url + '/book/index',
          data: {
            pageIndex: this.data.pageIndex
          },
          success: function(res) {
            console.log(res)
            console.log(pageIndex)
            console.log(res.data.data.hasMore)
            that.setData({
              listData: that.data.listData.concat(res.data.data.list),
              pageIndex: pageIndex,
              isHideLoadMore: false,
              canLoad: true,
              hasMore: res.data.data.hasMore
            })
          },
          fail: function(res) {
            console.log(res)
          }
        })
      }, 1000)
    }
    // 第一页且没有更多数据
    else if (!hasMore && this.data.pageIndex == 1) {
      return;
    } else {
      wx.showModal({
        title: '提示',
        content: '没有更多数据了',
        showCancel: false
      })
    }
  }
})