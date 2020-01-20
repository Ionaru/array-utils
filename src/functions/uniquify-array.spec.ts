import { uniquifyArray, uniquifyObjectsArray } from './uniquify-array';

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

describe('uniquifyObjectsArray', () => {

    test('Empty array', () => {
        const output = uniquifyObjectsArray([], () => '');
        expect(output).toEqual([]);
    });

    test.each([

        [[{x: 1}, {x: 1}, {x: 1}], [{x: 1}]],
        [[{x: 1}, {x: 2}, {x: 1}], [{x: 1}, {x: 2}]],
        [[{x: 2}, {x: 2}, {x: 1}], [{x: 2}, {x: 1}]],
        [[{x: 1}, {x: 2}, {x: 3}], [{x: 1}, {x: 2}, {x: 3}]],

    ])('Arrays with numbers', (input, expectedOutput) => {
        const output = uniquifyObjectsArray(input, (element) => element.x);
        expect(output).toEqual(expectedOutput);
    });

    test.each([

        [[{x: 'a'}, {x: 'a'}, {x: 'a'}], [{x: 'a'}]],
        [[{x: 'a'}, {x: 'b'}, {x: 'a'}], [{x: 'a'}, {x: 'b'}]],
        [[{x: 'b'}, {x: 'b'}, {x: 'a'}], [{x: 'b'}, {x: 'a'}]],
        [[{x: 'a'}, {x: 'b'}, {x: 'c'}], [{x: 'a'}, {x: 'b'}, {x: 'c'}]],

    ])('Arrays with strings', (input, expectedOutput) => {
        const output = uniquifyObjectsArray(input, (element) => element.x);
        expect(output).toEqual(expectedOutput);
    });
});
