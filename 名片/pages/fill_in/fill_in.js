import util from "../../utils/util";
// pages/fill_in/fill_in.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['请选择公司品牌', '公司1', '公司2', '公司3'],
    index: 0,
    avatar:"../../img/touxiang.jpg"
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  submitData: function (e) {
    var that = this;
    if (e.detail.value.m_name == '') {
      wx.showToast({
        title: '请填写姓名',
        icon: 'none',
        duration: 2000
      });
    } else if (e.detail.value.m_job == '') {
      wx.showToast({
        title: '请输入职位或称谓',
        icon: 'none',
        duration: 2000
      });
    } else if (e.detail.value.m_gs == 0) {
      wx.showToast({
        title: '请选择公司品牌',
        icon: 'none',
        duration: 2000
      });
    }else if (e.detail.value.m_phone == '') {
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
    } else if (e.detail.value.m_address_detailed == '') {
      wx.showToast({
        title: '请填写详细地址',
        icon: 'none',
        duration: 2000
      });
    } 
  },
  changeAvatar: function () {
    var that = this;
    // var childId = wx.getStorageSync("child_id");
    // var token = wx.getStorageSync('token');
    wx.chooseImage({
      count: 1, // 最多可以选择的图片张数，默认9
      sizeType: ['compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        console.log(res.tempFilePaths + "修改页面")
        var avatar = res.tempFilePaths;
        that.setData({
          avatar: avatar,
          upAvatar: true
        })
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