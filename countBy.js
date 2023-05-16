export default function countBy(ogArray, identity) {
  const identityToUse = identity ? identity : (value) => value

  const identityArray = ogArray.map((item) => {
    if (typeof identityToUse === 'function') {
      return identityToUse(item)
    }
    return item[identityToUse]
  })

  const keyObj = identityArray.reduce((accumulator, nextItem) => {
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
