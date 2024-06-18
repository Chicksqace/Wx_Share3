var app = getApp()
Page({
    data: {
    },

    onShareAppMessage: function () {
      return {
        title: 'XXXXX',
        desc: 'XXXXXX',
        path: '/page/user?id=123'
      }
    },

    openMap: function () {
      wx.getLocation({
        type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
        success: function (res) {
          // success
          wx.openLocation({
            latitude: 22.54, // 纬度，范围为-90~90，负数表示南纬
            longitude: 114.059, // 经度，范围为-180~180，负数表示西经
            scale: 28, // 缩放比例          
          })
        }
      })
    },

      calling: function () {
      wx.makePhoneCall({
        phoneNumber: '4000000000',
      })
    }
})