//app.js
App({
  onLaunch: function() {
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 登录
              wx.login({
                success: res => {
                  // 发送 res.code 到后台换取 openId, sessionKey, unionId
                  // this.register({
                  //   code: res.code
                  // });
                }
              })
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  post: function(url, data) {
    wx.showLoading({
      title: '加载中...',
      mask: true
    })
    var promise = new Promise((resolve, reject) => {
      //init
      var that = this;
      //判断用户数据是否存在
      var token = wx.getStorageSync('token')
      var header = {
        'content-type': 'application/json'
      }
      if (token) {
        header.Accept = 'application/json'
        header.Authorization = 'Bearer ' + token
      }
      /*
      //自动添加签名字段到postData，makeSign(obj)是一个自定义的生成签名字符串的函数
      postData.signature = that.makeSign(postData);
      */
      var urls = this.globalData.api_url
      //网络请求
      wx.request({
        url: urls + url,
        data: data,
        method: 'POST',
        header: header,
        responseType: 'Text',
        success: function(res) { //服务器返回数据
          if (res.statusCode == 200) { //res.data 为 后台返回数据，格式为{"data":{...}, "info":"成功", "status":1}, 后台规定：如果status为1,既是正确结果。可以根据自己业务逻辑来设定判断条件
            resolve(res.data);
          }
        },
        error: function(e) {
          wx.hideLoading();
          reject('请求失败');
        }
      })
    });
    return promise;
  },
  sign: function(url) {
    var that = this;
    //调用登录接口
    wx.login({
      success: function(response) {
        var code = response.code
        wx.getUserInfo({
          success: function(resp) {
            resp.code = code;
            that.post('register', resp).then((res) => {
              wx.setStorageSync('token', res.success.token);
              wx.reLaunch({
                url: url,
              })
              wx.hideLoading();
            }).catch((errMsg) => {
              wx.hideLoading();
            });
          }
        })
      },
      fail: function() {

      }
    })
  },
  /**
   * 微信登录
   */
  login: function(e) {
    // var data = {
    //   email: '923414403@qq.com',
    //   password: 'qqqqqq'
    // }
    // this.post('login', data).then((res) => {
    //   wx.setStorageSync('token', res.success.token);
    //   wx.hideLoading();
    // }).catch((errMsg) => {
    //   wx.hideLoading();
    // });
  },
  /**
   * 微信注册
   */
  register: function(e) {
    var data = {
      email: '923414403@qq.com',
      password: 'qqqqqq'
    }
    this.post('login', data).then((res) => {
      wx.setStorageSync('token', res.success.token);
      wx.hideLoading();
    }).catch((errMsg) => {
      wx.hideLoading();
    });
  },
  globalData: {
    userInfo: null,
    api_url: 'https://www.liuhuanguang.club/api/'
  },

})