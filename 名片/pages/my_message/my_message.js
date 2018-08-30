// pages/my_message/my_message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    my_message:[
      { logo: "../../img/touxiang.jpg", name: "邵爸爸", content:"用了这个妙招，每天都领到了金额很大的支付宝红包，高兴飞了"},
      { logo: "../../img/touxiang.jpg", name: "邵爸爸", content: "用了这个妙招，每天都领到了金额很大的支付宝红包，高兴飞了" },
      { logo: "../../img/touxiang.jpg", name: "邵爸爸", content: "用了这个妙招，每天都领到了金额很大的支付宝红包，高兴飞了" },
      { logo: "../../img/touxiang.jpg", name: "邵爸爸", content: "用了这个妙招，每天都领到了金额很大的支付宝红包，高兴飞了" },
    ]
  },
  showComment: function () {
    var that = this;
    that.setData({
      isComment: 1,
    })
  },
  hideComment: function () {
    var that = this;
    that.setData({
      isComment: 0,
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