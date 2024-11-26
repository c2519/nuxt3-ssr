/**
 * 验证一个值范围[min, max]
 */
export function range(value, param) {
  return value >= param[0] && value <= param[1];
}

/** 判断是否为空 */
export function empty(value) {
  return (
    value === null ||
    value === undefined ||
    (typeof value === 'string' && value.trim() === '') ||
    (Array.isArray(value) && value.length === 0) ||
    (value instanceof Object && Object.keys(value).length === 0)
  );
}
