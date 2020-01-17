export let filterNum = (data, symbol, floor = false) => {
  if (!data) return "0"
  let num = Number(data)
  if (num >= 100000000) {
    num = num / 100000000
    num = (floor ? Math.floor(num) : num) + '亿'
  } else if (num >= 10000) {
    num = num / 10000
    num = (floor ? Math.floor(num) : num) + '万'
  }
  num = symbol ? symbol + num : num
  return num
}
