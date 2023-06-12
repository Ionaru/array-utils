import { describe, expect, it } from 'vitest';

import { filterArray } from './filter-array.js';

describe('filterArray', () => {

    it('empty array', () => {
        expect.assertions(1);
        const output = filterArray([]);
        expect(output).toStrictEqual([]);
    });

    it.each([

        [[undefined, undefined, undefined], []],

        [[1, undefined, 2], [1, 2]],
        // eslint-disable-next-line unicorn/no-null
        [[1, null, 2], [1, null, 2]],
        [[undefined, 2, 1], [2, 1]],
        [[1, 2, 3, undefined], [1, 2, 3]],
        [[1, 2, 3, 'undefined'], [1, 2, 3, 'undefined']],

        [['a', undefined, 'b'], ['a', 'b']],
        [[undefined, 'b', 'a'], ['b', 'a']],
        [['b', undefined, 'a'], ['b', 'a']],
        [['a', 'b', 'c', undefined], ['a', 'b', 'c']],
        [['a', 'b', 'c', 'undefined'], ['a', 'b', 'c', 'undefined']],

    ])('arrays with numbers', (input, expectedOutput) => {
        expect.assertions(1);
        const output = filterArray(input);
        expect(output).toStrictEqual(expectedOutput);
    });
});
