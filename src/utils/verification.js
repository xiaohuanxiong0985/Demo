import { Toast } from 'vant';
/**
 * @param form  表单数据 type: Object
 * @param arr  循环的列表  type: Array
 * @param name arr中与form对应字段的字段
 * @returns boolean
 */
const phone = /^1[3456789]\d{9}$/;
const card = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i;
export function verification (form, arr, name) {
  for (let i = 0; i < arr.length; i++) {
    let obj = arr[i];
    if (form[obj[name]] === '' && obj['required'] === undefined) {
      obj['link'] ? Toast(`请选择${obj.label}`) : Toast(`请输入${obj.label}`);
      return false;
    } else {
      switch (obj['key']) {
        case 'phone':
          if (!(phone.test(form[obj[name]]))) {
            Toast(`请输入正确的${obj['label']}`);
            return false;
          }
          break;
        case 'card':
          if (!(card.test(form[obj[name]]))) {
            Toast(`请输入正确的${obj['label']}`);
            return false;
          }
          break;
        default:
      }
    }
  }
}
