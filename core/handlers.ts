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
  if (arr.length < 1) return []
  if (!endIndex || endIndex > arr.length) {
    endIndex = arr.length
  }
  if (startIndex > endIndex) throw new Error("起始点不能大于终止点")
  const slicedArr: Array<T> = []
  for (let i = 0; i < endIndex; i++) {
    slicedArr.push(arr[i])
  }
  return slicedArr
}

/**@desc 数组查询 [{},{}] 这种 */
/**
 * @param multip 是否匹配多个,默认 false
 */
export function findBy<T>(
  arr: Array<T>,
  key: keyof T,
  value: any,
  multip = false
): Array<T> | T | undefined {
  const matched: Array<T> = []
  for (const iter of arr) {
    if (iter[key] === value) {
      matched.push(iter)
    }
  }
  return multip ? matched : matched[0]
}

export default {
  slice,
  findBy,
}
