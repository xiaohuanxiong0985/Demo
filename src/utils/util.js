/**
 * 时间转换
 */
export function GetDateTimeToString (date_, format) {
  let year = date_.getFullYear();
  let month = date_.getMonth() + 1;
  let day = date_.getDate();
  if (month < 10) month = '0' + month;
  if (day < 10) day = '0' + day;

  let hours = date_.getHours();
  let mins = date_.getMinutes();
  let secs = date_.getSeconds();
  let msecs = date_.getMilliseconds();
  if (hours < 10) hours = '0' + hours;
  if (mins < 10) mins = '0' + mins;
  if (secs < 10) secs = '0' + secs;
  if (msecs < 10) secs = '0' + msecs;
  if (!format) {
    return year + month + day + hours + mins + secs;
  } else if (format === 'yyyymm') {
    return year + month;
  }
  // return year + '/' + month + '/' + day + ' ' + hours + ':' + mins;
};

//  对发布订阅模式进行封装
class Observe {
  constructor () {
    this.events = {};
  }
  //  订阅方法
  on (key, cd) {
    if (!this.events[key]) this.events[key] = [];
    this.events[key].push(cd);
  }
  //  发布方法
  emmit (key, value) {
    if (this.events[key].length) {
      const events = this.events[key];
      events.forEach(v => v.call(this, value));
    }
  }
  //  删除订阅者
  remove (key) {
    this.events.forEach(v => {
      if (v === key) {
        delete this.events[v];
      }
    });
  }
}
export const observeSession = new Observe();
