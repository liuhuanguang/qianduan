var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    mask_box: true,
    ellipsis:true,
    addressList: [],
    about_list:[
      { about:"网易云的技术积累起始于1997年成立的邮箱业务；"},
      { about: "从2006年到2011年，网易杭州研究院开始为网易互联网产品提供公共基础技术平台；" },
      { about: "2012年至2015年，网易大规模地部署私有云，支撑了网易集团互联网产品的全面上云。" },
      { about: "2015年至今，网易云先后推出了通信与视频服务（网易云信）、全智能云客服（网易七鱼）、云计算基础服务（网易蜂巢）、云安全（网易易盾）等一系列场景化云服务。" },
      { about: "2016年9月20日 首度发布云战略，推出“网易云”，并将其云计算战略定位于“场景化云服务”" },
      { about: "2016年9月21日 网易云荣获2015-2016年度全球最佳实践奖 " },
      { about: "2017年4月13日 网易云与COCOSPACE共建成都双创基地  " },
      { about: "2017年5月 网易云主办“网易中国创业家大赛”" },
      { about: "2017年7月11日 网易云与易物达成合作，为其提供专属云服务 " },
    ],
    img_list:[
      { img: "../../img/fc1.jpg" }, { img: "../../img/fc2.jpg" }, { img: "../../img/fc3.jpg" }, { img: "../../img/fc4.jpg" }, { img: "../../img/fc5.jpg" }, { img: "../../img/fc6.jpg" },
    ], 
    
  },
  // 地址复制
  copyBtn: function (e) {
    var that = this;
    wx.setClipboardData({
      data: that.data.addressList.xxdz,
      success: function (res) {
        wx.showToast({
          title: '复制成功',
        });
      }
    });
  },
  // 微信号复制
  copyBtns: function (e) {
    var that = this;
    wx.setClipboardData({
      data: that.data.addressList.wxh,
      success: function (res) {
        wx.showToast({
          title: '复制成功',
        });
      }
    });
  },
  // 拨打电话
  call: function () {
    var that = this;
    wx.makePhoneCall({
      phoneNumber: '18335903534'
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.videoContext = wx.createVideoContext('myVideo')
    this.audioCtx = wx.getBackgroundAudioManager()
    const backgroundAudioManager = wx.getBackgroundAudioManager()

    backgroundAudioManager.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
  },
  bindGetUserInfo: function (e) {
    console.log(e);
    if (e.detail.type == 1){
      var url = 'page/index/index'
    } else if (e.detail.type==2){
      var url = 'page/code/code'
    }
    var user = e.detail.userInfo
    if (user) {
      //重新执行用户登录 
      app.sign(url)
    } else {
      wx.showModal({
        title: '警告',
        content: '您已拒绝授权，如需使用点击立即获取，重新获取授权！',
        showCancel: false
      })
    }
  },
  gomy:function(){
    var obj = this;
    app.post('details', {}).then((res) => {
      wx.setStorageSync('user', res.success);
      obj.setData({
        user: res.success
      })
      console.log(res)
      wx.hideLoading();
    }).catch((errMsg) => {
      wx.hideLoading();
    });
  },
  // 视频播放
  bindPlay: function () {
    this.videoContext.play();
    this.setData({
      mask_box: false
    })
  },
  // 暂停播放视频
  stop: function () {
    this.setData({
      mask_box: true
    })
  },
  // 暂停播放背景音乐
  mainHandler: function () {
    var that = this;
    var value = !that.data.ellipsis;
    that.setData({
      ellipsis: value
    })
    console.log(that.audioCtx);
    if (that.audioCtx.paused) {
      that.audioCtx.play();
    } else {
      that.audioCtx.pause();
    }
  },
  // 打开交换名片
  open: function () {
    this.setData({
      apply: true,
    })
  },
  close: function () { 
    this.setData({
      apply: false,
    })
  },
  yes: function () {
    this.setData({
      apply: false,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (op) {
    var id = 1;
    
    this.list = [{
      'praise': 0,
      'img':'../../img/ll3.png',
      'img1': '../../img/ll3_1.png',
      'hasChange': false
    },
    {
      'praise': 133,
      'img': '../../img/ll4.png',
      'img1': '../../img/ll4_1.png',
      'hasChange': false
    },
    ]
    
    var arr = wx.getStorageSync('addressList');
    console.info("缓存数据：" + arr);
    this.setData({
      list: this.list,
      addressList: arr
    })
    
    // 更新数据

    
    
  },
  praiseThis: function (e) {
    var index = e.currentTarget.dataset.curindex;
    if (this.list[index]) {
      var hasChange = this.list[index].hasChange;
      if (hasChange !== undefined) {
        var onum = this.list[index].praise;
        if (hasChange) {
          this.list[index].praise = (onum - 1);
          this.list[index].hasChange = false;
        } else {
          this.list[index].praise = (onum + 1);
          this.list[index].hasChange = true;
        }
        this.setData({
          list: this.list
        })
      }
    }
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.onLoad();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    var that = this;
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