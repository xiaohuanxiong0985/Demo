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

/**
 * 处理路由
 */
export function handleRouter (list) {
  let routerList = [
    {
      title: '自助缴费',
      item: []
    },
    {
      title: '预约服务',
      item: []
    },
    {
      title: '预约受理',
      item: []
    }
  ];
  list.map(item => {
    if (item.cengJi === 3 && item.shangJiBianHao === 250) {
      let urlList = JSON.parse(item.lianJie);
      item.text = item.mingCheng;
      item.url = urlList.url1 || '/select_user';
      item.sort = urlList.url2 || '/render';
      item.icon = item.tuBiao || 'tubiao_huaban';
      item.color = item.tuBiaoYanSe || '#FF8900';
      routerList[0]['item'].push(item);
    }
    if (item.cengJi === 3 && item.shangJiBianHao === 251) {
      let urlList = JSON.parse(item.lianJie);
      item.text = item.mingCheng;
      item.url = urlList.url1 || '/select_user';
      item.sort = urlList.url2 || '/select_type';
      item.icon = item.tuBiao || 'tubiao_huabanfuben7';
      item.color = item.tuBiaoYanSe || '#FF8900';
      routerList[1]['item'].push(item);
    }
    if (item.cengJi === 3 && item.shangJiBianHao === 252) {
      let urlList = JSON.parse(item.lianJie);
      item.text = item.mingCheng;
      item.url = urlList.url1 || '/recording';
      item.sort = urlList.url2 || 'repair';
      item.icon = item.tuBiao || 'tubiao_huabanfuben7';
      item.color = item.tuBiaoYanSe || '';
      routerList[2]['item'].push(item);
    }
  });
  routerList[0]['item'].sort((a, b) => {
    return a.paiXu - b.paiXu;
  });
  routerList[1]['item'].sort((a, b) => {
    return a.paiXu - b.paiXu;
  });
  routerList[2]['item'].sort((a, b) => {
    return a.paiXu - b.paiXu;
  });
  return routerList;
}
