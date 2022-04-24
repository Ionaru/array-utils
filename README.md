# @ionaru/array-utils

[![npm version](https://img.shields.io/npm/v/@ionaru/array-utils.svg?style=for-the-badge)](https://www.npmjs.com/package/@ionaru/array-utils)
[![npm version](https://img.shields.io/npm/v/@ionaru/array-utils/next.svg?style=for-the-badge)](https://www.npmjs.com/package/@ionaru/array-utils/v/next)
[![Build Status](https://img.shields.io/github/workflow/status/ionaru/array-utils/Test%20&%20Deploy/master?style=for-the-badge)](https://github.com/Ionaru/array-utils/actions)
[![codecov](https://img.shields.io/codecov/c/github/Ionaru/array-utils/master.svg?style=for-the-badge)](https://codecov.io/gh/Ionaru/array-utils)

## Description
This package contains a number of strongly typed utility functions for arrays.

## Table of contents

   * [Installation](#installation)
   * [Usage](#usage)
      * Functions
        * [filterArray](#filterarrayarray)
        * [generateNumbersArray](#generatenumbersarraylength-start-step)
        * [getNumberEnumKeys](#getnumberenumkeysnumberenum)
        * [getNumberEnumValues](#getnumberenumvaluesnumberenum)
        * [getRandomItemFromArray](#getrandomitemfromarrayarray-remove)
        * [groupArrayByObjectProperty](#grouparraybyobjectpropertyarray-attributegetter)
        * [objectsArrayToObject](#objectsarraytoobjectarray-attributegetter)
        * [objectToObjectsArray](#objecttoobjectsarrayobject)
        * [sortArrayByObjectProperty](#sortarraybyobjectpropertyarray-attributegetter-inverse)
        * [sortArrayByObjectPropertyLength](#sortarraybyobjectpropertylengtharray-attributegetter-inverse)
        * [splitArrayIntoChunks](#splitarrayintochunksarray-chunksize)
        * [uniquifyArray](#uniquifyarrayarray)
        * [uniquifyObjectsArray](#uniquifyobjectsarrayarray-attributegetter)
      * Structures
        * [Queue](#queuemaxlength)
        * [Stack](#queuemaxlength)

## Installation
```
npm install @ionaru/array-utils
```

## Usage

### `filterArray(array)`
Filter 'undefined' elements from an array.

```js
import { filterArray } from '@ionaru/array-utils';

const array = [1, 2, undefined, 4, undefined, 3];

const filteredArray = filterArray(array);
console.log(filteredArray); // [1, 2, 4, 3]
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

### `getNumberEnumKeys(numberEnum)`
Get the key names from a Typescript number-Enum.

```ts
import { getNumberEnumKeys } from '@ionaru/array-utils';

enum MyEnum {
    ZERO,
    ONE,
    TWO,
}

const enumKeys = getNumberEnumKeys(MyEnum);
console.log(enumKeys);
// [
//     'ZERO',
//     'ONE',
//     'TWO',
// ]
```

### `getNumberEnumValues(numberEnum)`
Get the values from a Typescript number-Enum.

```ts
import { getNumberEnumValues } from '@ionaru/array-utils';

enum MyEnum {
    ZERO,
    ONE,
    TWO,
}

const enumValues = getNumberEnumValues(MyEnum);
console.log(enumValues);
// [
//     0,
//     1,
//     2,
// ]
```

### `getRandomItemFromArray(array, remove)`
Get a random item from an array and optionally remove it.

```js
import { getRandomItemFromArray } from '@ionaru/array-utils';

const myArray = [1, 2, 3];

const randomItem = getRandomItemFromArray(myArray);
console.log(randomItem); // 1 or 2 or 3
console.log(myArray); // [1, 2, 3]

const secondRandomItem = getRandomItemFromArray(myArray, true);
console.log(secondRandomItem); // 1 or 2 or 3
console.log(myArray); // [1, 2] or [2, 3] or [1, 3]
```

### `groupArrayByObjectProperty(array, attributeGetter)`
Group elements with the same object attributes together.

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
// }

const uniqueArrayOnY = groupArrayByObjectProperty(myArray, (element) => element.y);
console.log(uniqueArrayOnY);
// {
//     1: [{x: 4, y: 1}],
//     2: [{x: 1, y: 2}, {x: 5, y: 2}],
//     9: [{x: 2, y: 9}, {x: 1, y: 9}]
// }
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

### `objectToObjectsArray(object)`
Convert an object containing objects to an array containing objects.
The object key will be added to the array as an attribute named 'key'.

```js
import { objectToObjectsArray } from '@ionaru/array-utils';

const myObject = {
    a: {item: 'abc', price: 15},
    b: {item: 'def', price: 10},
};

const array = objectToObjectsArray(myObject);
console.log(array);
// [
//     {key: 'a', item: 'abc', price: 15},
//     {key: 'b', item: 'def', price: 10},
// ]
```

### `sortArrayByObjectProperty(array, attributeGetter, inverse)`
Sort an array of objects by the value in those objects.
This function will sort the given array in-place.

```js
import { sortArrayByObjectProperty } from '@ionaru/array-utils';

const myArray = [
    {item: 'abc', price: 15},
    {item: 'def', price: 10},
];

sortArrayByObjectProperty(myArray, (element) => element.price);
console.log(myArray);
// [
//     {item: 'def', price: 10},
//     {item: 'abc', price: 15},
// ]
```

### `sortArrayByObjectPropertyLength(array, attributeGetter, inverse)`
Sort an array of objects by the length of a value in those objects.
This function will sort the given array in-place.

```js
import { sortArrayByObjectPropertyLength } from '@ionaru/array-utils';

const myArray = [
    {user: 7, photos: [1, 6, 8]},
    {user: 9, photos: [3, 7]},
];

sortArrayByObjectPropertyLength(myArray, (element) => element.photos);
console.log(myArray);
// [
//     {user: 9, photos: [3, 7]},
//     {user: 7, photos: [1, 6, 8]},
// ]
```

### `splitArrayIntoChunks(array, chunkSize)`
Split an array into chunks of the given size.

```js
import { splitArrayIntoChunks } from '@ionaru/array-utils';

const myArray = [1, 2, 3, 4, 5];

const chunks = splitArrayIntoChunks(myArray, 2);
console.log(chunks);
// [
//     [1, 2],
//     [3, 4],
//     [5]
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

### `Queue(maxLength)`
A typed Queue implementation.

```ts
import { Queue } from '@ionaru/array-utils';

new queue = new Queue<string>(20);
queue.enqueue('Some value');
queue.dequeue(); // returns 'Some value' and deleted it from the queue

queue.enqueue('Another value');
queue.enqueue('Yet another value');
queue.peek(); // returns 'Some value', but does not delete it.
```

### `Stack(maxLength)`
A typed Stack implementation.

```ts
import { Stack } from '@ionaru/array-utils';

new stack = new Stack<string>(20);
stack.push('Some value');
stack.pop(); // returns 'Some value' and deleted it from the stack

stack.push('Another value');
stack.push('Yet another value');
stack.peek(); // returns 'Yet another value', but does not delete it.
```
