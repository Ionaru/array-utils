import { objectsArrayToObject } from './objects-array-to-object';

describe('objectsArrayToObject', () => {
    it('convert array to object', () => {
        expect.assertions(1);
        const array = [
            {oneKey: 'oneValue', twoKey: 'twoValue'},
            {oneKey: 'threeValue', twoKey: 'fourValue'},
        ];

        const result = objectsArrayToObject(array, 'oneKey');

        expect(result).toStrictEqual({
            oneValue: {oneKey: 'oneValue', twoKey: 'twoValue'},
            threeValue: {oneKey: 'threeValue', twoKey: 'fourValue'},
        });
    });

    it('convert array to object with number keys', () => {
        expect.assertions(1);
        const array = [
            {1: 'oneValue', 2: 'twoValue'},
            {1: 'threeValue', 2: 'fourValue'},
        ];

        const result = objectsArrayToObject(array, '1');

        expect(result).toStrictEqual({
            oneValue: {1: 'oneValue', 2: 'twoValue'},
            threeValue: {1: 'threeValue', 2: 'fourValue'},
        });
    });
});
