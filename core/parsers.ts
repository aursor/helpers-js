/**@desc 解析url参数 */
export function parserUrl(u: string) {
  const o: { [key: string]: any } = {};
  const query = u.split("?")[1];
  if (query) {
    const entries = query.split("&").map((str) => str.split("="));
    if (entries) {
      for (const set of entries) {
        const [k, v] = set;
        if (v) {
          o[k] = v;
        }
      }
    }
  }
  return o;
}

export default { parserUrl };
