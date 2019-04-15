import { uniquifyArray } from './uniquify-array';

describe('uniquifyArray', () => {

    test('Empty array', () => {
        const output = uniquifyArray([]);
        expect(output).toEqual([]);
    });

    test.each([

        [[1, 1, 1], [1]],
        [[1, 2, 1], [1, 2]],
        [[2, 2, 1], [2, 1]],
        [[1, 2, 3], [1, 2, 3]],

    ])('Arrays with numbers', (input, expectedOutput) => {
        const output = uniquifyArray(input);
        expect(output).toEqual(expectedOutput);
    });

    test.each([

        [['a', 'a', 'a'], ['a']],
        [['a', 'b', 'a'], ['a', 'b']],
        [['b', 'b', 'a'], ['b', 'a']],
        [['a', 'b', 'c'], ['a', 'b', 'c']],

    ])('Arrays with strings', (input, expectedOutput) => {
        const output = uniquifyArray(input);
        expect(output).toEqual(expectedOutput);
    });
});
