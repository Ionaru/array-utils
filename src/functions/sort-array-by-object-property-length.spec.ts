import { beforeEach, describe, expect, it } from 'vitest';

import { sortArrayByObjectPropertyLength } from './sort-array-by-object-property-length.js';

class MyCustomClass {
    public constructor(public readonly length: number) { }
}

describe('sortArrayByObjectPropertyLength', () => {
    let unsortedArray: Array<{ value: { length: number; }; }>;

    beforeEach(() => {
        unsortedArray = [
            { value: 'aaaa' },
            { value: 'aa' },
            { value: 'a' },
            { value: 'aaaaa' },
            { value: 'aaa' },
        ];
    });

    it('sorting an array with only one value', () => {
        expect.assertions(1);
        const array = [{ value: 'a' }];
        sortArrayByObjectPropertyLength(array, (element) => element.value);

        expect(array).toStrictEqual([{ value: 'a' }]);
    });

    it('reverse sorting an array with only one value', () => {
        expect.assertions(1);
        const array = [{ value: 'a' }];
        sortArrayByObjectPropertyLength([{ value: 'a' }], (element) => element.value, true);

        expect(array).toStrictEqual([{ value: 'a' }]);
    });

    it('sorting an array by object property', () => {
        expect.assertions(1);
        sortArrayByObjectPropertyLength(unsortedArray, (element) => element.value);

        expect(unsortedArray).toStrictEqual([
            { value: 'a' },
            { value: 'aa' },
            { value: 'aaa' },
            { value: 'aaaa' },
            { value: 'aaaaa' },
        ]);
    });

    it('reverse sorting an array by object property', () => {
        expect.assertions(1);
        sortArrayByObjectPropertyLength(unsortedArray, (element) => element.value, true);

        expect(unsortedArray).toStrictEqual([
            { value: 'aaaaa' },
            { value: 'aaaa' },
            { value: 'aaa' },
            { value: 'aa' },
            { value: 'a' },
        ]);
    });

    it('can handle lists', () => {
        expect.assertions(1);
        const unsortedArrayOfArrays = [
            { value: ['a', 'a', 'a', 'a'] },
            { value: ['a', 'a'] },
            { value: ['a'] },
            { value: ['a', 'a', 'a', 'a', 'a'] },
            { value: ['a', 'a', 'a'] },
        ];
        sortArrayByObjectPropertyLength(unsortedArrayOfArrays, (element) => element.value);

        expect(unsortedArrayOfArrays).toStrictEqual([
            { value: ['a'] },
            { value: ['a', 'a'] },
            { value: ['a', 'a', 'a'] },
            { value: ['a', 'a', 'a', 'a'] },
            { value: ['a', 'a', 'a', 'a', 'a'] },
        ]);
    });

    it('can handle custom objects', () => {
        expect.assertions(1);
        const unsortedArrayWithCustomObjects = [
            { length: 4 },
            { length: 2 },
            { length: 1 },
            { length: 5 },
            { length: 3 },
        ];
        sortArrayByObjectPropertyLength(unsortedArrayWithCustomObjects, (element) => element);

        expect(unsortedArrayWithCustomObjects).toStrictEqual([
            { length: 1 },
            { length: 2 },
            { length: 3 },
            { length: 4 },
            { length: 5 },
        ]);
    });

    it('can handle classes', () => {
        expect.assertions(1);

        const myCustomClass1 = new MyCustomClass(1);
        const myCustomClass2 = new MyCustomClass(2);
        const myCustomClass3 = new MyCustomClass(3);
        const myCustomClass4 = new MyCustomClass(4);
        const myCustomClass5 = new MyCustomClass(5);

        const unsortedArrayWithCustomObjects = [
            myCustomClass4,
            myCustomClass2,
            myCustomClass1,
            myCustomClass5,
            myCustomClass3,
        ];
        sortArrayByObjectPropertyLength(unsortedArrayWithCustomObjects, (element) => element);

        expect(unsortedArrayWithCustomObjects).toStrictEqual([
            myCustomClass1,
            myCustomClass2,
            myCustomClass3,
            myCustomClass4,
            myCustomClass5,
        ]);
    });
});
