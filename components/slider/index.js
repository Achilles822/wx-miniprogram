Component({
  /**
   * 组件的属性列表
   */
  properties: {
    width: {
      type: String,
      value: '750rpx', // 宽，默认 750rpx
    },
    height: {
      type: String,
      value: '400rpx', // 高，默认 350rpx
    },
    autoplay: {
      type: Boolean,
      value: true, // 自动播放，默认启用
    },
    interval: {
      type: Number,
      value: 3000, // 自动切换时间间隔，默认 3000 毫秒
    },
    duration: {
      type: Number,
      value: 500, // 滑动动画时长，默认 500 毫秒
    },
    circular: {
      type: Boolean,
      value: true, // 是否采用衔接滑动，默认启用
    },
    previousMargin: {
      type: String,
      value: '60rpx', // 前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值，默认 60 rpx
    },
    nextMargin: {
      type: String,
      value: '60rpx', // 后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值，默认 60 rpx
    },
    sliders: {
      type: Array,
      value: [], // 轮播内容，数组内容是对象，格式: {imgUrl: 'https://..,jpg', title: '天气晴朗', subtitle: '适合debug'}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    current: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    change(e) {
      const current = e.detail.current
      this.setData({
        current
      })
    }
  }
})