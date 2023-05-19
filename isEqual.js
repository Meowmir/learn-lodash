/**
 * ----
 * @returns {boolean} - The array containing the taken elements
 * @param a
 * @param b
 */

export default function isEqual(a, b) {
  const aToUse = a ? a.valueOf() : a
  const bToUse = b ? b.valueOf() : b

  if (typeof aToUse === 'number' && typeof bToUse === 'number' && isNaN(a) && isNaN(b)) {
    return true
  }

  if (aToUse === bToUse) {
    return true
  }

  if (Array.isArray(aToUse) && Array.isArray(bToUse)) {
    return JSON.stringify(aToUse) === JSON.stringify(bToUse)
  }

  return false
}

