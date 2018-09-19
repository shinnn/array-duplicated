'use strict';

var appendType = require('append-type');

/*!
 * array-duplicated | ISC (c) Shinnosuke Watanabe
 * https://github.com/shinnn/array-duplicated
*/

function is(val) {
	return Object.is(this, val);
}

module.exports = function arrayDuplicated(arr) {
	if (!Array.isArray(arr)) {
		throw new TypeError('Expected an Array, but got ' + appendType(arr) + '.');
	}

	if (arr.length < 2) {
		return [];
	}

	var results = [];
	var skippableIndexes = new Set();
	var index = arr.length;

	while (index--) {
		if (skippableIndexes.has(index)) {
			continue;
		}

		var val = arr[index];

		if (results.findIndex(is, val) !== -1) {
			continue;
		}

		var foundIndex = arr.findIndex(is, val);

		if (foundIndex === index) {
			continue;
		}

		skippableIndexes.add(foundIndex);
		results.unshift(val);
	}

	return results;
}
