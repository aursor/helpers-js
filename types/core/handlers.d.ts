/**
 * @desc 数组切片
 * @desc startIndex 默认为0;endIndex默认为数组长度;startIndex不能>endIndex;默认包含起点元素,不包含终点元素
 */
export declare function slice<T>(arr: Array<T>, startIndex?: number, endIndex?: number): Array<T> | never;
declare const _default: {
    slice: typeof slice;
};
export default _default;
