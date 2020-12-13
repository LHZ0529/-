
// miniprogram/pages/nid/nid.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    word:'欢迎使用',
    src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607792504348&di=5987a41c533a186d61e79eeef420a416&imgtype=0&src=http%3A%2F%2Fpics6.baidu.com%2Ffeed%2Fd01373f082025aaf697aa2335a203262014f1ad6.jpeg%3Ftoken%3Da07af5783ccea8d5cc0fdd0792fac5d3%26s%3D51A03C724BB47601CD45435C0300C0F6',
    count:1,
  },
  getMyInfo:function(e)
  {
    console.log(e.detail.getUserInfo)
    let info=e.detail.userInfo;
    this.setData({
      word:info.nickName,
      src:info.avatarUrl,
      count:this.data.count+1
    })
    
  },
  switch:function(){
    wx.navigateTo({
     url:'../chaxun/chaxun'
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
          },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})