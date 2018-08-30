// pages/open_service/open_service.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    catalogSelect:0,
    catalogs:[
      { price: "39.9", time: "月", prices: "50", money: "10.1" },
      { price: "99", time: "三年", prices: "360", money: "261" },
      { price: "158", time: "十年", prices: "720", money: "562" }
    ],
    privilege: [
      { concent: "开通服务后即可展示自己的联系方式，访客能第一时间联系到您；" },
      { concent: "开通服务后可以展示您上传的照片，丰富您的名片；" },
      { concent: "设置名片底部是否显示平台广告，关闭广告页面更整洁；" },
      { concent: "开通服务后，您可以管理您的访客信息查看有哪些访客一级停留时间；" },
      { concent: "开通服务后，您可以生成自己专属小程序码，分享到朋友圈。" },
    ],
  },
  select: function (data) {
    var that = this;
    that.setData({
      catalogSelect: data.currentTarget.dataset.select
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