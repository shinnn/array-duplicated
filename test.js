'use strict';

const requireBowerFiles = require('require-bower-files');
const test = require('tape');

function runTest(description, arrayDuplicated) {
  test(description, t => {
    t.plan(4);

    t.equal(arrayDuplicated.name, 'arrayDuplicated', 'should have a function name.');

    t.deepEqual(
      arrayDuplicated(['1', '2', 'a', '3', '2', 'a', 'a']), ['2', 'a'],
      'should return an array of duplicated values.'
    );

    t.throws(
      () => arrayDuplicated(),
      /TypeError.* is not an array\..*must be an array\./,
      'should throw a type error when it takes no arguments.'
    );

    t.throws(
      () => arrayDuplicated(arguments),
      /TypeError.* is not an array\..*must be an array\./,
      'should throw a type error when the first argument is not an array.'
    );
  });
}

runTest('require(\'array-duplicated\')', require('.'));

global.window = {};
requireBowerFiles({self: true});

runTest('window.arrayDuplicated', window.arrayDuplicated);
