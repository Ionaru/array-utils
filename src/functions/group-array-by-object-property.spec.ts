import { groupArrayByObjectProperty } from './group-array-by-object-property';

describe('groupArrayByObjectProperty', () => {

    const array = [
        {a: 1, b: '2', c: 'e'},
        {a: 2, b: '0', c: 'x'},
        {a: 2, b: '2', c: 'p'},
        {a: 1, b: '2', c: 'e'},
        {a: 1, b: '0', c: 'c'},
        {a: 3, b: '0', c: 't'},
    ];

    test('On A', () => {
        const result = groupArrayByObjectProperty(array, (element) => element.a);

        expect(result).toEqual({
            1: [
                {a: 1, b: '2', c: 'e'},
                {a: 1, b: '2', c: 'e'},
                {a: 1, b: '0', c: 'c'},
            ],
            2: [
                {a: 2, b: '0', c: 'x'},
                {a: 2, b: '2', c: 'p'},
            ],
            3: [
                {a: 3, b: '0', c: 't'},
            ],
        });
    });

    test('On B', () => {
        const result = groupArrayByObjectProperty(array, (element) => element.b);

        expect(result).toEqual({
            0: [
                {a: 2, b: '0', c: 'x'},
                {a: 1, b: '0', c: 'c'},
                {a: 3, b: '0', c: 't'},
            ],
            2: [
                {a: 1, b: '2', c: 'e'},
                {a: 2, b: '2', c: 'p'},
                {a: 1, b: '2', c: 'e'},
            ],
        });
    });

    test('On C', () => {
        const result = groupArrayByObjectProperty(array, (element) => element.c);

        expect(result).toEqual({
            c: [
                {a: 1, b: '0', c: 'c'},
            ],
            e: [
                {a: 1, b: '2', c: 'e'},
                {a: 1, b: '2', c: 'e'},
            ],
            p: [
                {a: 2, b: '2', c: 'p'},
            ],
            t: [
                {a: 3, b: '0', c: 't'},
            ],
            x: [
                {a: 2, b: '0', c: 'x'},
            ],
        });
    });
});
