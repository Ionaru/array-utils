/* eslint-disable import/extensions */
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

    it('on A', () => {
        expect.assertions(1);
        const result = groupArrayByObjectProperty(array, (element) => element.a);

        expect(result).toStrictEqual({
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

    it('on B', () => {
        expect.assertions(1);
        const result = groupArrayByObjectProperty(array, (element) => element.b);

        expect(result).toStrictEqual({
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

    it('on C', () => {
        expect.assertions(1);
        const result = groupArrayByObjectProperty(array, (element) => element.c);

        expect(result).toStrictEqual({
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
