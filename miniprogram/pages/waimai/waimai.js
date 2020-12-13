const app = getApp()

Page({
  data: {
    money:"",
    name: "",
    tel: "",
    id: "",
    other:"",
    zhuangtai:"yes",
  },
  zhuangtai: function (e) {
    this.setData({
      zhuangtai: e.detail.value
    })
  },
  money: function (e) {
    this.setData({
      money: e.detail.value
    })
  },
  name: function (e) {
    this.setData({
      name: e.detail.value
    })
  },

  tel: function (e) {
    this.setData({
      tel: e.detail.value
    })
  },

  id: function (e) {
    this.setData({
      id: e.detail.value
    })
  },
 
  other: function (e) {
    this.setData({
      other: e.detail.value
    })
  },
  get:function(){
    this.data.zhuangtai="no"
  },

  upload: function () {
    const db = wx.cloud.database()
    db.collection("waimai").add({
      data: {
        money:this.data.money,
        name: this.data.name,
        id: this.data.id,
        tel: this.data.tel,
        other:this.data.other,
        zhuangtai:this.data.zhuangtai,
      },
      success: function (res) {
        console.log(res)    
      }
    })
    wx.navigateTo({
      url:'../chenggong/chenggong'
    })
  }  ,
  
  
  put: function () {
    if (this.data.name.length == 0 || this.data.other.length == 0) {
      wx.showToast({
        title: '信息不能为空',
        icon: 'loading',
        duration: 2000
      })
    } else {
      // 这里修改成跳转的页面 
      wx.showToast({
        title: '发布成功',
        icon: 'success',
        duration: 2000
      })
    }
  }
})
