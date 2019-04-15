# @ionaru/array-utils

[![npm version](https://img.shields.io/npm/v/@ionaru/array-utils.svg?style=for-the-badge)](https://www.npmjs.com/package/@ionaru/array-utils)
[![npm version](https://img.shields.io/npm/v/@ionaru/array-utils/next.svg?style=for-the-badge)](https://www.npmjs.com/package/@ionaru/array-utils/v/next)
[![Build Status](https://img.shields.io/travis/Ionaru/array-utils/master.svg?style=for-the-badge)](https://travis-ci.org/Ionaru/array-utils)
[![codecov](https://img.shields.io/codecov/c/github/Ionaru/array-utils/master.svg?style=for-the-badge)](https://codecov.io/gh/Ionaru/array-utils)

## Description
This package contains a number of utility functions for arrays.

## Usage
```
npm install @ionaru/array-utils
```

### generateNumbersArray(length)
Generates an array of numbers, starting on 1.

```js
import { generateNumbersArray } from '@ionaru/array-utils';

const array = generateNumbersArray(5);
console.log(array); // [1, 2, 3, 4, 5]
```

### objectsArrayToObject(array, key)
Convert an array containing objects to an object containing objects.
The value of the `key` parameter will be used as key for the objects.

```js
import { objectsArrayToObject } from '@ionaru/array-utils';

const myArray = [
    {item: 'abc', price: 15},
    {item: 'def', price: 10},
];

const object = objectsArrayToObject(myArray, 'item');
console.log(object);
// {
//     abc: {item: 'abc', price: 15},
//     def {item: 'def', price: 10},
// }
```

### sortArrayByObjectProperty(array, property, inverse)
Sort an array of object by the value in those objects.
This function will sort the given array in-place.

```js
import { sortArrayByObjectProperty } from '@ionaru/array-utils';

const myArray = [
    {item: 'abc', price: 15},
    {item: 'def', price: 10},
];

sortArrayByObjectProperty(myArray, 'price');
console.log(myArray);
// [
//     {item: 'def', price: 10},
//     {item: 'abc', price: 15},
// ]
```

### uniquifyArray(array)
Filter duplicate values from an array.

```js
import { uniquifyArray } from '@ionaru/array-utils';

const myArray = [1, 2, 2, 3, 3, 6, 7];

const uniqueArray = uniquifyArray(myArray);
console.log(uniqueArray); // [1, 2, 3, 6, 7]
```
