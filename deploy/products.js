const fs = require('fs');
const path = require('path');
const config = require('../src/config/config');
//  判断环境
const envfile = process.env.NODE_ENV === 'prod' ? '../.env.production' : '../.env.development';
// env环境变量的路径
const envPath = path.resolve(__dirname, envfile);
// env对象
const envObj = parse(fs.readFileSync(envPath, 'utf8'));
const SERVER_ID = parseInt(envObj['VUE_APP_SERVER_ID']);
function parse (src) {
  // 解析KEY=VAL的文件
  const res = {};
  src.split('\n').forEach(line => {
    // matching "KEY' and 'VAL' in 'KEY=VAL'
    // eslint-disable-next-line no-useless-escape
    const keyValueArr = line.match(/^\s*([\w\.\-]+)\s*=\s*(.*)?\s*$/);
    // matched?
    if (keyValueArr != null) {
      const key = keyValueArr[1];
      let value = keyValueArr[2] || '';
      // expand newlines in quoted values
      const len = value ? value.length : 0;
      if (len > 0 && value.charAt(0) === '"' && value.charAt(len - 1) === '"') {
        value = value.replace(/\\n/gm, '\n');
      }
      // remove any surrounding quotes and extra spaces
      value = value.replace(/(^['"]|['"]$)/g, '').trim();

      res[key] = value;
    }
  });
  return res;
}
const SERVER_LIST = [
  {
    id: 0,
    name: '测试环境',
    // domain: 'www.prod.com', // 域名
    host: config.test.host, // ip
    port: config.test.port, // 端口
    username: config.test.username, // 登录服务器的账号
    password: config.test.password, // 登录服务器的账号
    path: config.test.path// 发布至静态服务器的项目路径
  },
  {
    id: 1,
    name: '生产环境',
    // domain: 'test.xxx.com',
    host: config.prod.host,
    port: config.prod.port, // 端口
    username: config.prod.username, // 登录服务器的账号
    password: config.prod.password, // 登录服务器的密码
    path: config.prod.path// 发布至静态服务器的项目路径
  }
];
module.exports = SERVER_LIST[SERVER_ID];
