import Mock from 'mockjs';
import { prob } from './response/test';
//  正则去掉url地址
Mock.mock(/\/prob/, prob);

export default Mock;
