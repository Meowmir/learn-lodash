export default function countBy(ogArray, identity) {
  const identityToUse = identity ? identity : (value) => value
  console.log(identityToUse)
  const idCheck = identityToUse ? 'hasOwnProperty' : 'constructor'
  console.log(idCheck)


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

  return keyObj
}
