import { beforeEach, describe, expect, it } from 'vitest';

import { sortArrayByObjectProperty } from './sort-array-by-object-property.js';

describe('sortArrayByObjectProperty', () => {
    let unsortedArray: Array<{ value: number }>;

    beforeEach(() => {
        unsortedArray = [
            { value: 2 },
            { value: 3 },
            { value: 0 },
            { value: 4 },
            { value: 1 },
        ];
    });

    it('sorting an array with only one value', () => {
        expect.assertions(1);
        const array = [{ value: 3 }];
        sortArrayByObjectProperty(array, (element) => element.value);

        expect(array).toStrictEqual([{ value: 3 }]);
    });

    it('reverse sorting an array with only one value', () => {
        expect.assertions(1);
        const array = [{ value: 3 }];
        sortArrayByObjectProperty(array, (element) => element.value, true);

        expect(array).toStrictEqual([{ value: 3 }]);
    });

    it('sorting an array by object property', () => {
        expect.assertions(1);
        sortArrayByObjectProperty(unsortedArray, (element) => element.value);

        expect(unsortedArray).toStrictEqual([
            { value: 0 },
            { value: 1 },
            { value: 2 },
            { value: 3 },
            { value: 4 },
        ]);
    });

    it('reverse sorting an array by object property', () => {
        expect.assertions(1);
        sortArrayByObjectProperty(
            unsortedArray,
            (element) => element.value,
            true,
        );

        expect(unsortedArray).toStrictEqual([
            { value: 4 },
            { value: 3 },
            { value: 2 },
            { value: 1 },
            { value: 0 },
        ]);
    });

    it('sort an array with some equal values', () => {
        expect.assertions(1);
        const unsortedArrayWithEqualValue = [
            { value: 2 },
            { value: 3 },
            { value: 2 },
            { value: 4 },
            { value: 1 },
        ];

        sortArrayByObjectProperty(
            unsortedArrayWithEqualValue,
            (element) => element.value,
        );

        expect(unsortedArrayWithEqualValue).toStrictEqual([
            { value: 1 },
            { value: 2 },
            { value: 2 },
            { value: 3 },
            { value: 4 },
        ]);
    });

    it('sorting an array with only equal values', () => {
        expect.assertions(1);
        const unsortedArrayWithEqualValues = [
            { value: 2 },
            { value: 2 },
            { value: 2 },
            { value: 2 },
            { value: 2 },
        ];

        sortArrayByObjectProperty(
            unsortedArrayWithEqualValues,
            (element) => element.value,
        );

        expect(unsortedArrayWithEqualValues).toStrictEqual([
            { value: 2 },
            { value: 2 },
            { value: 2 },
            { value: 2 },
            { value: 2 },
        ]);
    });

    it('reverse sorting an array with only equal values', () => {
        expect.assertions(1);
        const unsortedArrayWithEqualValues = [
            { value: 2 },
            { value: 2 },
            { value: 2 },
            { value: 2 },
            { value: 2 },
        ];

        sortArrayByObjectProperty(
            unsortedArrayWithEqualValues,
            (element) => element.value,
            true,
        );

        expect(unsortedArrayWithEqualValues).toStrictEqual([
            { value: 2 },
            { value: 2 },
            { value: 2 },
            { value: 2 },
            { value: 2 },
        ]);
    });

    it('reverse sort an array with some equal values', () => {
        expect.assertions(1);
        const unsortedArrayWithEqualValue = [
            { value: 2 },
            { value: 3 },
            { value: 2 },
            { value: 4 },
            { value: 1 },
        ];

        sortArrayByObjectProperty(
            unsortedArrayWithEqualValue,
            (element) => element.value,
            true,
        );

        expect(unsortedArrayWithEqualValue).toStrictEqual([
            { value: 4 },
            { value: 3 },
            { value: 2 },
            { value: 2 },
            { value: 1 },
        ]);
    });

    it('attempting to sort an undefined value in an array must throw an error', () => {
        expect.assertions(1);
        const unsortedArrayWithUndefinedValue = [
            { value: 2 },
            { value: 3 },
            { value: undefined },
            { value: 4 },
            { value: 1 },
        ];

        expect(() => {
            // @ts-expect-error Should throw an error.
            sortArrayByObjectProperty(
                unsortedArrayWithUndefinedValue,
                (element) => element.value,
            );
        }).toThrow(
            /^Unable to compare values '(3|undefined)' and '(3|undefined)'$/,
        );
    });

    it('attempting to sort a string value in an array must throw an error', () => {
        expect.assertions(1);
        const unsortedArrayWithStringValue = [
            { value: 2 },
            { value: 3 },
            { value: '2' },
            { value: 4 },
            { value: 1 },
        ];

        expect(() => {
            sortArrayByObjectProperty(
                unsortedArrayWithStringValue,
                (element) => element.value,
            );
        }).toThrow(
            /^Unable to compare different types: '[23]' \((number|string)\) and '[23]' \((number|string)\)$/,
        );
    });

    it('sort an array with string values', () => {
        expect.assertions(1);
        const unsortedArrayWithStringValues = [
            { value: '2' },
            { value: '3' },
            { value: '2' },
            { value: '4' },
            { value: '1' },
        ];

        sortArrayByObjectProperty(
            unsortedArrayWithStringValues,
            (element) => element.value,
        );

        expect(unsortedArrayWithStringValues).toStrictEqual([
            { value: '1' },
            { value: '2' },
            { value: '2' },
            { value: '3' },
            { value: '4' },
        ]);
    });

    it('sort an array with nested values', () => {
        expect.assertions(1);
        const unsortedArrayWithEqualValue = [
            { value: { value: 2 } },
            { value: { value: 3 } },
            { value: { value: 2 } },
            { value: { value: 4 } },
            { value: { value: 1 } },
        ];

        sortArrayByObjectProperty(
            unsortedArrayWithEqualValue,
            (element) => element.value.value,
            true,
        );

        expect(unsortedArrayWithEqualValue).toStrictEqual([
            { value: { value: 4 } },
            { value: { value: 3 } },
            { value: { value: 2 } },
            { value: { value: 2 } },
            { value: { value: 1 } },
        ]);
    });

    it('sort an array with double nested values', () => {
        expect.assertions(1);
        const unsortedArrayWithEqualValue = [
            { value: { value: { value: 2 } } },
            { value: { value: { value: 3 } } },
            { value: { value: { value: 2 } } },
            { value: { value: { value: 4 } } },
            { value: { value: { value: 1 } } },
        ];

        sortArrayByObjectProperty(
            unsortedArrayWithEqualValue,
            (element) => element.value.value.value,
            true,
        );

        expect(unsortedArrayWithEqualValue).toStrictEqual([
            { value: { value: { value: 4 } } },
            { value: { value: { value: 3 } } },
            { value: { value: { value: 2 } } },
            { value: { value: { value: 2 } } },
            { value: { value: { value: 1 } } },
        ]);
    });
});
