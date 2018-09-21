'use strict';

const arrayDuplicated = require('.');
const test = require('tape');

test('arrayDuplicated()', t => {
	t.deepEqual(
		arrayDuplicated(['1', '2', 'a', '3', '2', 'a', 'a']),
		['2', 'a'],
		'should return an Array of duplicated values.'
	);

	t.deepEqual(
		arrayDuplicated([-0, -0, 0, 0]),
		[-0, 0],
		'should consider same-value equality.'
	);

	t.deepEqual(
		arrayDuplicated([{}]),
		[],
		'should return an empty value when the array has no duplicates.'
	);

	t.deepEqual(
		arrayDuplicated([, , ]), // eslint-disable-line array-bracket-spacing, no-sparse-arrays
		[],
		'should ignore empty indexes.'
	);

	t.throws(
		() => arrayDuplicated(),
		/^TypeError.*Expected an Array, but got undefined\./u,
		'should throw a type error when it takes no arguments.'
	);

	t.throws(
		() => arrayDuplicated(Symbol('123')),
		/^TypeError.*Expected an Array, but got Symbol\(123\) \(symbol\)\./u,
		'should throw a type error when the first argument is not an array.'
	);

	t.end();
});
