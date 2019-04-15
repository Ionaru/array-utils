import { generateNumbersArray } from './generate-numbers-array';

describe('generateNumbersArray', () => {
    test.each([
        [0, []],
        [1, [1]],
        [2, [1, 2]],
        [5, [1, 2, 3, 4, 5]],
        [10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
    ])('An array with length %p', (length, expectedResult) => {
        const result = generateNumbersArray(length as number);
        expect(result).toEqual(expectedResult);
    });

    test.each([
        -1, 1.5, Infinity,
    ])('Bad input: %p', (length) => {
        expect(() => generateNumbersArray(length)).toThrow('Invalid array length');
    });
});
