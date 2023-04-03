/**
 * @desc 数组切片
 * @desc startIndex 默认为0;endIndex默认为数组长度;startIndex不能>endIndex;默认包含起点元素,不包含终点元素
 * @desc 浅复制
 */
export declare function slice<T>(arr: Array<T>, startIndex?: number, endIndex?: number): Array<T> | never;
/**@desc 数组查询 [{},{}] 这种 */
/**
 * @param multip 是否匹配多个,默认 false
 */
export declare function findBy<T>(arr: Array<T>, key: keyof T, value: any, multip?: boolean): Array<T> | T | undefined;
/**@desc 生成随机颜色 */
export declare function randomColor(): string;
/**@desc 字符串替换,index不能小于0，并且不能大于等于value的长度,截取之后 */
/**
 * 比如: stringReplace("你好世界",0,"我") ---> "我好世界啊"
 */
export declare function stringReplace(value: string, index: number, inserted: string): string;
/**
 * @desc 文件分片
 * @param {File} file 文件
 * @param {number} minSize 分片的尺寸
 */
export declare function sliceFile(file: File, minSize: number): Promise<Array<Blob>>;
declare const _default: {
    slice: typeof slice;
    findBy: typeof findBy;
    randomColor: typeof randomColor;
    stringReplace: typeof stringReplace;
    sliceFile: typeof sliceFile;
};
export default _default;
