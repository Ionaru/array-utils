import * as index from './index.js';

describe('export tests', () => {

    it('must export functions', () => {
        expect.assertions(9);

        expect(Object.entries(index)).toHaveLength(8);
        expect(typeof index.generateNumbersArray).toBe('function');
        expect(typeof index.objectsArrayToObject).toBe('function');
        expect(typeof index.sortArrayByObjectProperty).toBe('function');
        expect(typeof index.uniquifyArray).toBe('function');
        expect(typeof index.uniquifyObjectsArray).toBe('function');
        expect(typeof index.groupArrayByObjectProperty).toBe('function');
        expect(typeof index.getNumberEnumValues).toBe('function');
        expect(typeof index.getNumberEnumKeys).toBe('function');
    });
});
