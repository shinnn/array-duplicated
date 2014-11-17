'use strict';

var requireBowerFiles = require('require-bower-files');
var test = require('tape');

function runTest(description, main) {
  test(description, function(t) {
    t.plan(4);

    t.equal(main.name, 'arrayDuplicated', 'should have a function name.');

    t.deepEqual(
      main(['1', '2', 'a', '3', '2', 'a', 'a']), ['2', 'a'],
      'should return an array of duplicated values.'
    );

    t.throws(
      main.bind(null), /TypeError/,
      'should throw a type error when it takes no arguments.'
    );

    t.throws(
      main.bind(null, arguments), /TypeError/,
      'should throw a type error when the first argument is not an array.'
    );
  });
}

runTest('require(\'duplicated\')', require('./'));

global.window = {};
requireBowerFiles({self: true});

runTest('window.arrayDuplicated', window.arrayDuplicated);
