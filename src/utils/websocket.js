import store from '@/store';
// const url = require('../config').wsUrl;
const url = 'ws://192.168.0.3:7979/myUrl'
// const url = 'ws://121.40.165.18:8800';
let wsConnection = {
  $ws: null,
  lockReturn: false,
  timeout: 60 * 1000 * 5,
  timeoutObj: null,
  timeoutNum: null,
  serverTimeoutObj: null,
  //  初始化websocket
  initWebsocket: function () {
    if ('WebSocket' in window) {
      let corpId = localStorage.getItem('corpId');
      let name = localStorage.getItem('userName');
      this.$ws = new WebSocket(url);
      this.$ws.onopen = this.wsOpen;
      this.$ws.onclose = this.wsClose;
      this.$ws.onmessage = this.wsMsg;
      this.$ws.onerror = this.wsError;
    } else {
      console.log(`您的游览器不支持webSocket呢~`)
    }
  },
  //  打开
  wsOpen: function () {
    //  开始websocket心跳
    wsConnection.startWsHeartbeat();
    console.log(`ws 建立成功`)
  },
  //  发送
  wsSend: function (msg) {
    //  发送数据
    this.$ws.send(msg)
    console.log(`发送成功`)
  },
  //  关闭
  wsClose: function (e) {
    console.log(`${e}, ws 关闭连接`)
  },
  //  监听
  wsMsg: function (msg) {
    //  收到服务器返回的信息后重置
    wsConnection.resetHeartbeat();
    //  拿到的信息存起来
    store.commit('web_socket_msg', msg)
  },
  //  错误
  wsError: function (err) {
    console.log(`连接失败, ${JSON.stringify(err)}`);
    // wsConnection.reconnect();
  },
  //  重置方法
  reconnect () {
    let that = this;
    if (that.lockReturn) {
      return;
    }
    that.lockReturn = true;
    that.timeoutNum && clearTimeout(that.timeoutNum);
    that.timeoutNum = setInterval(() => {
      that.initWebsocket();
      that.lockReturn = false;
    })
  },
  //
  startWsHeartbeat () {
    let that = this;
    that.timeoutObj && clearTimeout(that.timeoutObj);
    that.serverTimeoutObj && clearTimeout(that.serverTimeoutObj);
    that.timeoutObj = setInterval(() => {
      if (that.$ws.readyState != 1) {
        that.reconnect();
      }
    }, that.timeout);
  },
  //  重置
  resetHeartbeat () {
    let that = this;
    clearTimeout(that.timeoutObj);
    clearTimeout(that.serverTimeoutObj);
    that.startWsHeartbeat();
  }
}

export default wsConnection
