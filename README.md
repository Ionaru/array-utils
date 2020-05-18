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

### `generateNumbersArray(length, start, step)`
Generates an array of numbers, both "start" and "step" are optional and default to 1.

```js
import { generateNumbersArray } from '@ionaru/array-utils';

const array = generateNumbersArray(5);
console.log(array); // [1, 2, 3, 4, 5]

const array = generateNumbersArray(5, 60);
console.log(array); // [60, 61, 62, 63, 64]

const array = generateNumbersArray(5, 70, 2);
console.log(array); // [70, 72, 74, 76, 78]

const array = generateNumbersArray(5, -2);
console.log(array); // [-2, -1, 0, 1, 2]

const array = generateNumbersArray(5, -2, -3);
console.log(array); // [-2, -5, -8, -12, -15]
```

### `objectsArrayToObject(array, attributeGetter)`
Convert an array containing objects to an object containing objects.
The return value of the `attributeGetter` parameter will be used as key for the objects.

```js
import { objectsArrayToObject } from '@ionaru/array-utils';

const myArray = [
    {item: 'abc', price: 15},
    {item: 'def', price: 10},
];

const object = objectsArrayToObject(myArray, (element) => element.item);
console.log(object);
// {
//     abc: {item: 'abc', price: 15},
//     def {item: 'def', price: 10},
// }
```

### `sortArrayByObjectProperty(array, property, inverse)`
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

### `uniquifyArray(array)`
Filter duplicate values from an array.

```js
import { uniquifyArray } from '@ionaru/array-utils';

const myArray = [1, 2, 2, 3, 3, 6, 7];

const uniqueArray = uniquifyArray(myArray);
console.log(uniqueArray); // [1, 2, 3, 6, 7]
```

### `uniquifyObjectsArray(array, attributeGetter)`
Filter duplicate object attributes from an array.

```js
import { uniquifyObjectsArray } from '@ionaru/array-utils';

const myArray = [
    {x: 1, y: 2}, 
    {x: 2, y: 9},
    {x: 1, y: 9},
    {x: 5, y: 2},
    {x: 4, y: 1},
];

const uniqueArrayOnX = uniquifyObjectsArray(myArray, (element) => element.x);
console.log(uniqueArrayOnX); // [{x: 1, y: 2}, {x: 2, y: 6}, {x: 5, y: 2}, {x: 4, y: 1}]

const uniqueArrayOnY = uniquifyObjectsArray(myArray, (element) => element.y);
console.log(uniqueArrayOnY); // [{x: 1, y: 2}, {x: 1, y: 9}, {x: 4, y: 1}]
```

### `groupArrayByObjectProperty(array, attributeGetter)`
Filter duplicate object attributes from an array.

```js
import { groupArrayByObjectProperty } from '@ionaru/array-utils';

const myArray = [
    {x: 1, y: 2}, 
    {x: 2, y: 9},
    {x: 1, y: 9},
    {x: 5, y: 2},
    {x: 4, y: 1},
];

const uniqueArrayOnX = groupArrayByObjectProperty(myArray, (element) => element.x);
console.log(uniqueArrayOnX);
// {
//     1: [{x: 1, y: 2}, {x: 1, y: 9}], 
//     2: [{x: 2, y: 9}], 
//     4: [{x: 4, y: 1}], 
//     5: [{x: 5, y: 2}]
// };

const uniqueArrayOnY = uniquifyObjectsArray(myArray, (element) => element.y);
console.log(uniqueArrayOnY);
// {
//     1: [{x: 4, y: 1}],
//     2: [{x: 1, y: 2}, {x: 5, y: 2}],
//     9: [{x: 2, y: 9}, {x: 1, y: 9}]
// };
```
