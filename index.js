'use strict';

var appendType = require('append-type');

/*!
 * array-duplicated | ISC (c) Shinnosuke Watanabe
 * https://github.com/shinnn/array-duplicated
*/

function arrayDuplicated(arr) {
	if (!Array.isArray(arr)) {
		throw new TypeError('Expected an Array, but got ' + appendType(arr) + '.');
	}

	var result = [];

	for (var i = 0; i < arr.length; i++) {
		if (arr.indexOf(arr[i]) !== i && result.indexOf(arr[i]) === -1) {
			result.push(arr[i]);
		}
	}

	return result;
}

module.exports = arrayDuplicated;
