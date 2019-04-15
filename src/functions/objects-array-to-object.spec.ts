import { objectsArrayToObject } from './objects-array-to-object';

describe('objectsArrayToObject', () => {
    test('Convert array to object', () => {
        const array = [
            {oneKey: 'oneValue', twoKey: 'twoValue'},
            {oneKey: 'threeValue', twoKey: 'fourValue'},
        ];

        const result = objectsArrayToObject(array, 'oneKey');

        expect(result).toEqual({
            oneValue: {oneKey: 'oneValue', twoKey: 'twoValue'},
            threeValue: {oneKey: 'threeValue', twoKey: 'fourValue'},
        });
    });
});
