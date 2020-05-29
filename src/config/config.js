module.exports = {
  wsUrl: 'ws://121.40.165.18:8800',
  title: '页面名称',
  //  代理配置
  proxy: {
    '/api/': {
      target: 'http://asset.vaiwan.com/api/', //  本地服务
      // target: 'http://asset.maiyawx.cn/api/',  //  线上服务
      ws: true,
      changeOrigin: true,
      pathRewrite: {
        '^/api/': '/'
      }
    },
    '/lpapi/': {
      target: 'http://127.0.0.1:15216/lpapi/',
      ws: true,
      changeOrigin: true,
      pathRewrite: {
        '^/lpapi/': '/'
      }
    },
  },
  //  服务器配置
  prod: {
    host: '39.98.156.129', // ip
    port: 22, // 端口
    username: 'root', // 登录服务器的账号
    password: 'cp906311...', // 登录服务器的账号
    path: '/website/print'// 发布至静态服务器的项目路径
  },
  test: {
    host: 'XX.XX.XX.XX',
    port: 22,
    username: 'root',
    password: 'xxxxxxx',
    path: '/usr/local/www/xxx_program_test/'
  }
}
