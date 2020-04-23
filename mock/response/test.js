import Mock from 'mockjs';

export const prob = (options) => {
  const template = {
    'code': '200',
    'msg': '请求成功',
    'data|': {
      'id': Mock.Random.natural(0, 7),
      'headImg': '@image'
    }
  };
  return Mock.mock(template);
};
