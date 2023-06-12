import { describe, expect, it } from 'vitest';

import { splitArrayIntoChunks } from './split-array-into-chunks.js';

describe('splitArrayIntoChunks', () => {
    it('empty array', () => {
        expect.assertions(1);
        const output = splitArrayIntoChunks([], 1);
        expect(output).toStrictEqual([]);
    });

    it('chunksize 0', () => {
        expect.assertions(1);
        const output = splitArrayIntoChunks([1, 2, 3], 0);
        expect(output).toStrictEqual([[1, 2, 3]]);
    });

    it('chunksize 1', () => {
        expect.assertions(1);
        const output = splitArrayIntoChunks([1, 2, 3], 1);
        expect(output).toStrictEqual([[1], [2], [3]]);
    });

    it('chunksize 2', () => {
        expect.assertions(1);
        const output = splitArrayIntoChunks([1, 2, 3], 2);
        expect(output).toStrictEqual([[1, 2], [3]]);
    });

    it('chunksize larger than array', () => {
        expect.assertions(1);
        const output = splitArrayIntoChunks([1, 2, 3], 50);
        expect(output).toStrictEqual([[1, 2, 3]]);
    });

    it('chunksize infinity', () => {
        expect.assertions(1);
        const output = splitArrayIntoChunks(
            [1, 2, 3],
            Number.POSITIVE_INFINITY,
        );
        expect(output).toStrictEqual([[1, 2, 3]]);
    });

    it('non-integer chunksize below 1', () => {
        expect.assertions(1);
        const output = splitArrayIntoChunks(
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            0.5,
        );
        expect(output).toStrictEqual([
            [],
            [1],
            [],
            [2],
            [],
            [3],
            [],
            [4],
            [],
            [5],
            [],
            [6],
            [],
            [7],
            [],
            [8],
            [],
            [9],
            [],
            [10],
        ]);
    });

    it('non-integer chunksize above 1', () => {
        expect.assertions(1);
        const output = splitArrayIntoChunks(
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            1.5,
        );
        expect(output).toStrictEqual([
            [1],
            [2, 3],
            [4],
            [5, 6],
            [7],
            [8, 9],
            [10],
        ]);
    });
});
