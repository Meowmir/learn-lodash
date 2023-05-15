export default function countBy(ogArray, identity) {
  const indentityToUse = identity ? identity : (value) => value
  const flooredArray = ogArray.map((num) => indentityToUse(num))
  const keyObj = flooredArray.reduce((accumulator, nextItem) => {
    const existing = accumulator[nextItem] || 0
    return {...accumulator, [nextItem]:existing+1}
  }, {})

  /*
  {...{}, "4":0+1}
  {...{"4":1}, "6":0+1}
  returned last time of callback: {...{"4":1, "6":1}, "6":1+1}
  result of reduce: {"4":1, "6":2}
   */

  return keyObj
}
