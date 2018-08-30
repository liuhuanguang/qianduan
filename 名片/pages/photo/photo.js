import util from "../../utils/util";
// pages/photo/photo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      { img: "../../img/fc1.jpg",id:1 },
      { img: "../../img/fc2.jpg",id:2 }, 
      { img: "../../img/fc3.jpg",id:3 }, 
      { img: "../../img/fc4.jpg",id:4 }, 
      { img: "../../img/fc5.jpg",id:5 }, 
      { img: "../../img/fc6.jpg",id:6 },
      { img: "../../img/fc1.jpg",id:7 },
      { img: "../../img/fc2.jpg",id:8 },
      { img: "../../img/fc3.jpg",id:9 },
    ],
    len: 0,
    
  },
  checkboxChange: function (e) {
    var xuanzhong = e.detail.value;

    var list = this.data.list;
    if (parseInt(e.detail.value.length) >= parseInt(6)) {

      for (var i = 0; i < list.length; i++) {
        if (xuanzhong.indexOf(list[i].id.toString()) != '-1') {
          list[i].is_check = true
          list[i].zhuangtai = false
        } else {
          list[i].is_check = false
          list[i].zhuangtai = true
        }
      }
      this.setData({
        list: list
      })
    } else {
      for (var i = 0; i < list.length; i++) {
        if (xuanzhong.indexOf(list[i].id.toString()) != '-1') {
          list[i].is_check = true
          list[i].zhuangtai = false
        } else {
          list[i].is_check = false
          list[i].zhuangtai = false
        }
      }
      this.setData({
        list: list
      })
    }
    this.setData({
      len: e.detail.value.length,
      data: e.detail.value,
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