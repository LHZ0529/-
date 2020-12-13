const db=wx.cloud.database().collection("kuaidi")
let val=""
let name=""
Page({
  data: {
  },
  shuru(event){
    name=event.detail.value
    console.log(name)
  },
  shanchu(event){
    val=event.detail.value
    console.log(val)
  },
  delete:function(){
  db.doc(val).remove({
    success: function(res) {
      console.log(res.data)
    }
  })
},
getdata(){
  let that=this;
  wx.cloud.database().collection("kuaidi").where({
    name:name
  }).get({
    success(res){
      console.log("请求成功",res)
      that.setData({
        datalist:res.data
      })
    },
    fail(res){
      console.log("请求失败",res)
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
