Page({
  data: {
    
  },
  onLoad: function (options) {
    
  },

  tapone: function () {
    wx.navigateTo({
      url:'../kuaidi/kuaidi'
    })
  },
  taptwo: function () {
    wx.navigateTo({
      url:'../waimai/waimai'
    })
  },
  tapthree: function () {
    wx.navigateTo({
      url: '../'
    })
  },

  autoImage : function(e) {
    var that = this;
    var  originalWidth  = e.detail.width;
    var originalHeight = e.detail.height;
    var imageWidth = 0;
    var imageHeight = 0;
    wx.getSystemInfo({
      complete: (res) => {
        var winWidth = res.windowWidth;
        if (originalWidth > winWidth) {
          var autoWidth = winWidth;
          var autoHeight = (autoWidth * originalHeight) / originalWidth;
          imageWidth = autoWidth + 'px';
         imageHeight = autoHeight + 'px';
        } else {
          imageWidth = originalWidth + 'px';
          imageHeight = originalHeight + 'px';
        }
        that.setData({
          imageWidth: imageWidth,
          imageHeight: imageHeight
        });
      }
    })
  }

})