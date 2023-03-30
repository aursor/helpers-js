/**
 * @desc 数组切片
 * @desc startIndex 默认为0;endIndex默认为数组长度;startIndex不能>endIndex;默认包含起点元素,不包含终点元素
 * @desc 浅复制
 */

export function slice<T>(
  arr: Array<T>,
  startIndex = 0,
  endIndex?: number
): Array<T> | never {
  if (arr.length < 1) return [];
  if (!endIndex || endIndex > arr.length) {
    endIndex = arr.length;
  }
  if (startIndex > endIndex) throw new Error("起始点不能大于终止点");
  const slicedArr: Array<T> = [];
  for (let i = 0; i < endIndex; i++) {
    slicedArr.push(arr[i]);
  }
  return slicedArr;
}

export default {
  slice,
};
