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

    test('Convert array to object with number keys', () => {
        const array = [
            {1: 'oneValue', 2: 'twoValue'},
            {1: 'threeValue', 2: 'fourValue'},
        ];

        const result = objectsArrayToObject(array, '1');

        expect(result).toEqual({
            oneValue: {1: 'oneValue', 2: 'twoValue'},
            threeValue: {1: 'threeValue', 2: 'fourValue'},
        });
    });
});
