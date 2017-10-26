# array-duplicated

[![npm version](https://img.shields.io/npm/v/array-duplicated.svg)](https://www.npmjs.com/package/array-duplicated)
[![Build Status](https://travis-ci.org/shinnn/array-duplicated.svg?branch=master)](https://travis-ci.org/shinnn/array-duplicated)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/array-duplicated.svg)](https://coveralls.io/r/shinnn/array-duplicated)

Return an array of duplicated values in a given array

```javascript
arrayDuplicated(['a', 2, 'b', true, 'b', 12, 'b', true, ['a']]) //=> ['b', true];
```

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/getting-started/what-is-npm).

```
npm install array-duplicated
```

## API

```javascript
import arrayDuplicated from 'array-duplicated';
```

### arrayDuplicated(*array*)

*array*: `Array` of any values  
Return: `Array`

It finds duplicated values in the array, and returns an array of them.

If the array doesn't contain duplicated values, it returns an empty array.

```javascript
arrayDuplicated([0,1,1,1,1,1,1,1,1,1]); //=> [1]
arrayDuplicated([0,1,2,3,4,5,6,7,8,9]); //=> []
```

## License

[ISC License](./LICENSE) © 2017 Shinnosuke Watanabe
