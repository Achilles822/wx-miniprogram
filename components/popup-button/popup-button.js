const BASE_PATH = '../../images/popup-button/'
Component({
  properties: {},
  data: {
    icon: {
      add: `${BASE_PATH}add.png`,
      search: `${BASE_PATH}search.png`,
      location: `${BASE_PATH}location.png`,
      chat: `${BASE_PATH}chat.png`
    },
    animation: {},
    items: [
      {
        index: 1,
        icon: `${BASE_PATH}search.png`,
        animation: {},
        tap: 'test'
      },
      {
        index: 2,
        icon: `${BASE_PATH}location.png`,
        animation: {},
        tap: 'test'
      },
      {
        index: 3,
        icon: `${BASE_PATH}chat.png`,
        animation: {},
        tap: 'test'
      }
    ],
    show: false
  },
  onLoad() {
    this.expend = false
  },
  onReady: function () {
    this.animation = wx.createAnimation()
  },
  methods: {
    test() {
      debugger
    },
    rotate: function () {
      let _ = this
      this.expend = !this.expend
      let animation = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease',
        delay: 500
      })
      animation.rotate(_.expend ? 0 : -45).step()
      _.setData({ animation: animation.export() })
      this.move(-30, -40, 1)
      this.move(-55, 0, 2)
      this.move(-30, 40, 3)
    },
    move(x, y, index) {
      let _ = this
      let animation = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease',
        delay: 0
      })
      let paramOne = _.expend ? 0 : x
      let paramTwo = _.expend ? 0 : y
      animation.translate(paramOne, paramTwo).step()
      if (_.expend) {
        _.setData({
          show: false
        })
      } else {
        _.setData({
          show: true
        })
      }
      _.setData({ [`items[${index - 1}].animation`]: animation.export() })
    }
  }
})
