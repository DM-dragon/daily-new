// pages/types/types.js
Page({
  //展示新闻详细信息
  showDetail:function(e){
    var url=e.currentTarget.id;
    wx.navigateTo({
      url:'/pages/detail/detail?url='+url
    })
  },
  //点击了新闻类型
  select:function(e){
    var that=this;
    var id= e.target.id;
    //console.log(id);
    this.setData({
      currentType:id
    });
    console.log(this.data.currentType);

    //按新闻类型，取新闻数据
    wx.request({
      url: 'http://v.juhe.cn/toutiao/index',
      
      data: {
        type: id,
        key: 'eb3c10f81c4a4791e5b7f14363cfbf32'
      },
      method: "GET",
      header: {
        'content-type': 'application/json' //HTTP请求协议
      },
      success: function (res) {
        console.log(res);
        that.setData({
          newsList: res.data.result.data
        });
      }
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    currentType:'top',
    newsList:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.request({
      url: 'http://v.juhe.cn/toutiao/index',
      data: {
        type: 'top',
        key: 'eb3c10f81c4a4791e5b7f14363cfbf32'
      },
      method: "GET",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res);
        that.setData({
          newsList: res.data.result.data
        });
      }
    });//进入页面时什么都不点所显示的头条内容

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