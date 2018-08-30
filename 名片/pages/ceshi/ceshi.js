Page({

  data: {

    wishList: [

      {

        dzzs: '22',

        collected: 1,

        id: 1

      },

      {

        dzzs: '33',

        collected: 0,

        id: 2

      },

      {

        dzzs: '44',

        collected: 1,

        id: 3

      },

      {

        dzzs: '555',

        collected: 1,

        id: 4

      },

      {

        dzzs: '666',

        collected: 0,

        id: 5

      },

      {

        dzzs: '777',

        collected: 0,

        id: 6

      }

    ],

  },



  // 更改点赞状态

  onCollectionTap: function(event) {

    // 获取当前点击下标

    var index = event.currentTarget.dataset.index;

    // data中获取列表

    var message = this.data.wishList;

    for (let i in message) { //遍历列表数据

      if (i == index) { //根据下标找到目标

        var collectStatus = false

        if (message[i].collected == 0) { //如果是没点赞+1

          collectStatus = true

          message[i].collected = parseInt(message[i].collected) + 1

          message[i].dzzs = parseInt(message[i].dzzs) + 1

        } else {

          collectStatus = false

          message[i].collected = parseInt(message[i].collected) - 1

          message[i].dzzs = parseInt(message[i].dzzs) - 1

        }

        wx.showToast({

          title: collectStatus ? '收藏成功' : '取消收藏',

        })

      }

    }

    this.setData({

      wishList: message

    })

  }
})