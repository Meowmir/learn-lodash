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
    const replacerFactory = (original) =>
      (key, value) =>
        key !== '' && value === original ? '[**Circular**]' : value

    return JSON.stringify(aToUse, replacerFactory(aToUse)) === JSON.stringify(bToUse, replacerFactory(bToUse))
  }

  if (!aToUse || !bToUse) {
    return aToUse === bToUse
  }

  if (typeof aToUse.constructor === 'function' &&
    typeof bToUse.constructor === 'function' &&
    aToUse.constructor !== bToUse.constructor) {
    return false
  }

  if (typeof aToUse === 'object' && typeof bToUse === 'object') {
    const aEntries = Object.entries(aToUse).sort(
      (one, two) =>
        one[0].localeCompare(two[0])
    )
    const bEntries = Object.entries(bToUse).sort(
      (one, two) =>
        one[0].localeCompare(two[0])
    )
    return JSON.stringify(aEntries) === JSON.stringify(bEntries)
  }

  return false
}

