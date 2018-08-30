import util from "../../utils/util";
// pages/proposal/proposal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  submitData: function (e) {
    var that = this;
    if (e.detail.value.m_name == '') {
      wx.showToast({
        title: '请填写姓名',
        icon: 'none',
        duration: 2000
      });
    } else if (e.detail.value.m_phone == '') {
      wx.showToast({
        title: '请输入手机号码',
        icon: 'none',
        duration: 2000
      });
    } else if (e.detail.value.m_phone.length != 11 || util.checkPhone(e.detail.value.m_phone) == false) {
      wx.showToast({
        title: '手机号码格式有误',
        icon: 'none',
        duration: 2000
      });
    } else if (e.detail.value.m_openid == '') {
      wx.showToast({
        title: '请填写微信号',
        icon: 'none',
        duration: 2000
      });
    } else if (e.detail.value.m_textarea == '') {
      wx.showToast({
        title: '请填写您的投诉建议',
        icon: 'none',
        duration: 2000
      });
    }
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