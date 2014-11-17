/*!
 * array-duplicated | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/array-duplicated
*/

window.arrayDuplicated = function arrayDuplicated(arr) {
  'use strict';

  if (!Array.isArray(arr)) {
    throw new TypeError('Argument must be an array.');
  }

  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== i && result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }

  return result;
};
