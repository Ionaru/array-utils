import * as index from './index';

describe('export tests', () => {

    it('must export functions', () => {
        expect.assertions(14);

        expect(Object.entries(index)).toHaveLength(13);
        expect(typeof index.generateNumbersArray).toBe('function');
        expect(typeof index.objectsArrayToObject).toBe('function');
        expect(typeof index.objectToObjectsArray).toBe('function');
        expect(typeof index.sortArrayByObjectProperty).toBe('function');
        expect(typeof index.getRandomItemFromArray).toBe('function');
        expect(typeof index.uniquifyArray).toBe('function');
        expect(typeof index.uniquifyObjectsArray).toBe('function');
        expect(typeof index.groupArrayByObjectProperty).toBe('function');
        expect(typeof index.getNumberEnumValues).toBe('function');
        expect(typeof index.getNumberEnumKeys).toBe('function');
        expect(typeof index.splitArrayIntoChunks).toBe('function');
        expect(typeof index.Queue).toBe('function');
        expect(typeof index.Stack).toBe('function');
    });
});
