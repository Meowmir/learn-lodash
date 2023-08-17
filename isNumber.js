/**
 * @param {any} checkIfNum - value to check if it is a Number
 * @returns {boolean}
 */

export default function isNumber(checkIfNum) {

  if (typeof checkIfNum === typeof NaN) {
    return true
  }

  if (!Number.isNaN(checkIfNum)) {
    return true
  }

  if (Number.isNaN(checkIfNum)) {
    return false
  }

  if (typeof checkIfNum !== typeof NaN) {
    return false
  }

  return
}
