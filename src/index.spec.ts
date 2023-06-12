import { describe, expect, it } from 'vitest';

import * as index from './index.js';

describe('export tests', () => {

    it('must export the expected amount of functions', () => {
        expect.assertions(1);
        expect(Object.entries(index)).toHaveLength(15);
    });

    it.each([
        index.generateNumbersArray,
        index.getNumberEnumValues,
        index.getNumberEnumKeys,
        index.getRandomItemFromArray,
        index.groupArrayByObjectProperty,
        index.objectsArrayToObject,
        index.objectToObjectsArray,
        index.sortArrayByObjectProperty,
        index.sortArrayByObjectPropertyLength,
        index.splitArrayIntoChunks,
        index.uniquifyArray,
        index.uniquifyObjectsArray,
        index.Queue,
        index.Stack,
    ])('must export %s', (key) => {
        expect.assertions(1);
        expect(typeof key).toBe('function');
    });
});
