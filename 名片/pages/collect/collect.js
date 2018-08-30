
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasList: true,
    exchange: [
      { name: "邵爸爸", job:"总经理", company:"广州XX网络科技有限公司", img: "../../img/touxiang.jpg", },
      { name: "邵爸爸", job:"总经理", company:"广州XX网络科技有限公司", img: "../../img/touxiang.jpg", },
      { name: "邵爸爸", job:"总经理", company:"广州XX网络科技有限公司", img: "../../img/touxiang.jpg", },
      { name: "邵爸爸", job:"总经理", company:"广州XX网络科技有限公司", img: "../../img/touxiang.jpg", }
    ]
  },
  library: function (e) {
    var index = e.target.dataset.index;
    var list = this.data.exchange;
    list.splice(index, 1);
    this.setData({
      exchange: list
    });
    if (!list.length) {
      this.setData({
        hasList: false
      });
    } 
    wx.showToast({
      title: '你已取消收藏',
      icon: 'none',
      duration: 1000
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