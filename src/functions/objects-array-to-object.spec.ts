import { objectsArrayToObject } from './objects-array-to-object';

describe('objectsArrayToObject', () => {
    it('convert array to object', () => {
        expect.assertions(1);
        const array = [
            {oneKey: 'oneValue', twoKey: 'twoValue'},
            {oneKey: 'threeValue', twoKey: 'fourValue'},
        ];

        const result = objectsArrayToObject(array, (item) => item.twoKey);

        expect(result).toStrictEqual({
            fourValue: {oneKey: 'threeValue', twoKey: 'fourValue'},
            twoValue: {oneKey: 'oneValue', twoKey: 'twoValue'},
        });
    });

    it('convert array to object with number keys', () => {
        expect.assertions(2);
        const array = [
            {1: 'oneValue', 2: 'twoValue'},
            {1: 'threeValue', 2: 'fourValue'},
        ];

        const result = objectsArrayToObject(array, (item) => item[1]);
        expect(result).toStrictEqual({
            oneValue: {1: 'oneValue', 2: 'twoValue'},
            threeValue: {1: 'threeValue', 2: 'fourValue'},
        });

        const result2 = objectsArrayToObject(array, (item) => item['2']);
        expect(result2).toStrictEqual({
            fourValue: {1: 'threeValue', 2: 'fourValue'},
            twoValue: {1: 'oneValue', 2: 'twoValue'},
        });
    });

    it('convert array to object with number values', () => {
        expect.assertions(1);
        const array = [
            {1: 1, 2: 2},
            {1: 3, 2: 4},
        ];

        const result = objectsArrayToObject(array, (item) => item[1]);
        expect(result).toStrictEqual({
            1: {1: 1, 2: 2},
            3: {1: 3, 2: 4},
        });
    });
});
