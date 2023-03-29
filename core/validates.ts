/**@description 校验中国手机号 */
export function isChinesePhone(value: string, reg?: RegExp): boolean {
  const instance = reg ? reg : /^1[3,5,6,7,8,9]\d{9}$/;
  return instance.test(value);
}

/**@description 校验Email地址 */
export function isEmail(value: string, reg?: RegExp) {
  const instance = reg ? reg : /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  return instance.test(value);
}

/**@description 校验不等于null或者不等于undefined */
export function isValidValue(value: any): boolean {
  return value === null || value === undefined;
}

/**@description 校验是否是空对象{}或者空数组[]或者空map或者空set,注意，这里只校验对象本身可枚举的属性，不包含原型链或者不可枚举的属性 */
export function isHasNoneChild(collections: object): boolean {
  if (collections instanceof Map || collections instanceof Set) {
    return collections.size < 1;
  }
  return Object.keys(collections).length < 1;
}

export default {
  isChinesePhone,
  isEmail,
  isValidValue,
  isHasNoneChild,
};
