/* eslint-disable sonarjs/no-identical-functions,import/extensions */
import { uniquifyArray, uniquifyObjectsArray } from './uniquify-array';

describe('uniquifyArray', () => {

    it('empty array', () => {
        expect.assertions(1);
        const output = uniquifyArray([]);
        expect(output).toStrictEqual([]);
    });

    it.each([

        [[1, 1, 1], [1]],
        [[1, 2, 1], [1, 2]],
        [[2, 2, 1], [2, 1]],
        [[1, 2, 3], [1, 2, 3]],

    ])('arrays with numbers', (input, expectedOutput) => {
        expect.assertions(1);
        const output = uniquifyArray(input);
        expect(output).toStrictEqual(expectedOutput);
    });

    it.each([

        [['a', 'a', 'a'], ['a']],
        [['a', 'b', 'a'], ['a', 'b']],
        [['b', 'b', 'a'], ['b', 'a']],
        [['a', 'b', 'c'], ['a', 'b', 'c']],

    ])('arrays with strings', (input, expectedOutput) => {
        expect.assertions(1);
        const output = uniquifyArray(input);
        expect(output).toStrictEqual(expectedOutput);
    });
});

describe('uniquifyObjectsArray', () => {

    it('empty array', () => {
        expect.assertions(1);
        const output = uniquifyObjectsArray([], () => '');
        expect(output).toStrictEqual([]);
    });

    it.each([

        [[{x: 1}, {x: 1}, {x: 1}], [{x: 1}]],
        [[{x: 1}, {x: 2}, {x: 1}], [{x: 1}, {x: 2}]],
        [[{x: 2}, {x: 2}, {x: 1}], [{x: 2}, {x: 1}]],
        [[{x: 1}, {x: 2}, {x: 3}], [{x: 1}, {x: 2}, {x: 3}]],

    ])('arrays with numbers', (input, expectedOutput) => {
        expect.assertions(1);
        const output = uniquifyObjectsArray(input, (element) => element.x);
        expect(output).toStrictEqual(expectedOutput);
    });

    it.each([

        [[{x: 'a'}, {x: 'a'}, {x: 'a'}], [{x: 'a'}]],
        [[{x: 'a'}, {x: 'b'}, {x: 'a'}], [{x: 'a'}, {x: 'b'}]],
        [[{x: 'b'}, {x: 'b'}, {x: 'a'}], [{x: 'b'}, {x: 'a'}]],
        [[{x: 'a'}, {x: 'b'}, {x: 'c'}], [{x: 'a'}, {x: 'b'}, {x: 'c'}]],

    ])('arrays with strings', (input, expectedOutput) => {
        expect.assertions(1);
        const output = uniquifyObjectsArray(input, (element) => element.x);
        expect(output).toStrictEqual(expectedOutput);
    });
});
