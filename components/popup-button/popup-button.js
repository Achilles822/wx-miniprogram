const BASE_PATH = "../../images/popup-button/";
var app = getApp();
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
        tap: "search"
      },
      {
        index: 2,
        icon: `${BASE_PATH}location.png`,
        animation: {},
        tap: "location"
      },
      {
        index: 3,
        icon: `${BASE_PATH}chat.png`,
        animation: {},
        tap: "chat"
      }
    ],
    show: false
  },
  lifetimes: {
    created: function() {
      this.expend = false;
    }
  },
  methods: {
    location() {
      console.log('you click location')
    },
    search() {
      console.log('you click search')
    },
    chat() {
      console.log('you click chat')
    },
    rotate: function() {
      this.expend = !this.expend;
      var animation = wx.createAnimation({
        duration: 300,
        timingFunction: "ease",
        delay: 200
      });
      let angle = this.expend ? -45 : 0;
      animation.rotate(angle).step();
      this.setData({
        animation: animation.export()
      });
      this.move(-30, -45, 1);
      this.move(-65, 0, 2);
      this.move(-30, 45, 3);
    },
    move(x, y, index) {
      let _ = this;
      let animation = wx.createAnimation({
        duration: 300,
        timingFunction: "ease",
        delay: 0
      });
      let paramOne = this.expend ? x : 0;
      let paramTwo = this.expend ? y : 0;
      animation.translate(paramOne, paramTwo).step();
      if (this.expend) {
        this.setData({
          show: true
        });
      } else {
        setTimeout(() => {
          this.setData({
            show: false
          });
        }, 200);
      }
      this.setData({ [`items[${index - 1}].animation`]: animation.export() });
    }
  }
});
