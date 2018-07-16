'use strict';

const arrayDuplicated = require('.');
const test = require('tape');

test('arrayDuplicated()', t => {
	t.deepEqual(
		arrayDuplicated(['1', '2', 'a', '3', '2', 'a', 'a']), ['2', 'a'],
		'should return an Array of duplicated values.'
	);

	t.throws(
		() => arrayDuplicated(),
		/TypeError.* is not an array\..*must be an array\./,
		'should throw a type error when it takes no arguments.'
	);

	t.throws(
		() => arrayDuplicated(Buffer.from('123')),
		/TypeError.* is not an array\..*must be an array\./,
		'should throw a type error when the first argument is not an array.'
	);

	t.end();
});
