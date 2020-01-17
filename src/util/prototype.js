/* 
 *判断是不是为空
 */
export function isNull(val) {
  return ['null', null, 'undefined', undefined, '[]', '{}'].includes(JSON.stringify(val))
}
