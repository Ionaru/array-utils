import {
    generateNumbersArray,
    groupArrayByObjectProperty,
    objectsArrayToObject,
    sortArrayByObjectProperty,
    uniquifyArray,
    uniquifyObjectsArray,
} from './index';

describe('export tests', () => {

    it('must export functions', () => {
        expect.assertions(6);

        expect(typeof generateNumbersArray).toBe('function');
        expect(typeof objectsArrayToObject).toBe('function');
        expect(typeof sortArrayByObjectProperty).toBe('function');
        expect(typeof uniquifyArray).toBe('function');
        expect(typeof uniquifyObjectsArray).toBe('function');
        expect(typeof groupArrayByObjectProperty).toBe('function');
    });
});

