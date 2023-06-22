/**
 @param {array} arrayToFill
 @param {value} valueToFillWith
 @param {number} startPosition
 @param {number} endPosition
 @returns {array}
 */

export default function fill(arrayToFill, valueToFillWith= undefined, startPosition= 0, endPosition= arrayToFill.length) {

  return arrayToFill.fill(valueToFillWith, startPosition, endPosition)
}
