/**
 * @param {any} checkIfNum - value to check if it is a Number
 * @returns {boolean}
 */

export default function isNumber(checkIfNum) {

  if (checkIfNum instanceof Date) {
    return false
  }

  if (typeof checkIfNum === 'object' && checkIfNum) {
    return typeof checkIfNum.valueOf() === 'number'
  }

  return typeof checkIfNum === 'number'
}
