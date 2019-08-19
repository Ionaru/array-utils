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
        [[10, 1, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
        [[10, 0, 2], [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]],
        [[10, 1, 2], [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]],
        [[10, 2, 2], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]],
        [[10, 2, 0], [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]],
        [[10, 0, 100], [0, 100, 200, 300, 400, 500, 600, 700, 800, 900]],

        [[11, -5, 1], [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]],
        [[11, 5, -1], [5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5]],
        [[10, -5, -1], [-5, -6, -7, -8, -9, -10, -11, -12, -13, -14]],
        [[10, -0, 1], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]],

        // Zeroes should never be a negative in the array.
        [[10, -0, -0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
        [[10, 0, -0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
        [[10, -0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],

        // From README
        [[5], [1, 2, 3, 4, 5]],
        [[5, 60], [60, 61, 62, 63, 64]],
        [[5, 70, 2], [70, 72, 74, 76, 78]],
        [[5, -2], [-2, -1, 0, 1, 2]],
        [[5, -2, -3], [-2, -5, -8, -11, -14]],

    ])('An array with params %p', (params, expectedResult) => {
        const result = generateNumbersArray(params[0], params[1], params[2]);
        expect(result).toEqual(expectedResult);
    });

    test.each([
        -1, 1.5, Infinity,
    ])('Bad input: %p', (length) => {
        expect(() => generateNumbersArray(length)).toThrow('Invalid array length');
    });
});
