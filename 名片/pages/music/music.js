// pages/music/music.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    displayList:[
      { src: "http://qiniuuwmp3.changba.com/762594318.mp3", songname:"111"},
      { src: "http://qiniuuwmp3.changba.com/754478465.mp3", songname:"222" },
      { src: "http://qiniuuwmp3.changba.com/750398435.mp3", songname:"333" },
      { src: "http://qiniuuwmp3.changba.com/737491018.mp3", songname: "444" },
      { src: "http://qiniuuwmp3.changba.com/724088791.mp3", songname: "555" },

    ],
    src:'',
    audioAction: {
      method: 'pause'
    },
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  // radioChange: function (e) {
  //   this.audioCtx.play()
  // },
  playItem: function (e) {
    this.setData({
      src: e.currentTarget.dataset.src,
    })
     this.play()
  },
  play: function () {
    this.setData({
      audioAction: {
        method: 'play'
      },
      loading: true
    })
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