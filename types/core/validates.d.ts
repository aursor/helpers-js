/**@description 校验中国手机号 */
export declare function isChinesePhone(value: string, reg?: RegExp): boolean;
/**@description 校验Email地址 */
export declare function isEmail(value: string, reg?: RegExp): boolean;
/**@description 校验不等于null或者不等于undefined */
export declare function isValidValue(value: any): boolean;
/**@description 校验是否是空对象{}或者空数组[]或者空map或者空set,注意，这里只校验对象本身可枚举的属性，不包含原型链或者不可枚举的属性 */
export declare function isHasNoneChild(collections: object): boolean;
declare const _default: {
    isChinesePhone: typeof isChinesePhone;
    isEmail: typeof isEmail;
    isValidValue: typeof isValidValue;
    isHasNoneChild: typeof isHasNoneChild;
};
export default _default;
