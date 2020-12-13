// miniprogram/pages/qukuaidi/qukuaidi.js
const db=wx.cloud.database().collection("waimai");
let id=""
let zhuangtai1="no"
Page({
  data: {
    zhuangtai:'yes',
  },
  jieshou(event){
    id=event.detail.value
    console.log(id)
  },
  get:function(){
    db.doc(id).update({
      data:{
        zhuangtai:zhuangtai1
      },
      success: function(res) {
        console.log(res.data)
      }
    })
  },
  getdata(){
    let that=this;
    wx.cloud.database().collection("waimai").get({
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
