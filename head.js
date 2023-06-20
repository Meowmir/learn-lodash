/**
 @param {array} arrayToQuery - The array to take from.
 @returns {boolean} - Returns first element of the given array.
 */

export default function head(arrayToQuery) {

  if (arrayToQuery.length === 0) {
    return undefined
  }

  return arrayToQuery[0]
}
