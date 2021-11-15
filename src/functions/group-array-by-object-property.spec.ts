import { groupArrayByObjectProperty } from './group-array-by-object-property';

describe('groupArrayByObjectProperty', () => {

    const array = [
        {a: 1, b: '2', c: 'e', d: new Date(5000)},
        {a: 2, b: '0', c: 'x', d: new Date(6000)},
        {a: 2, b: '2', c: 'p', d: new Date(7000)},
        {a: 1, b: '2', c: 'e', d: new Date(8000)},
        {a: 1, b: '0', c: 'c', d: new Date(6000)},
        {a: 3, b: '0', c: 't', d: new Date(8000)},
    ];

    it('on A', () => {
        expect.assertions(1);
        const result = groupArrayByObjectProperty(array, (element) => element.a);

        expect(result).toStrictEqual({
            1: [
                {a: 1, b: '2', c: 'e', d: new Date(5000)},
                {a: 1, b: '2', c: 'e', d: new Date(8000)},
                {a: 1, b: '0', c: 'c', d: new Date(6000)},
            ],
            2: [
                {a: 2, b: '0', c: 'x', d: new Date(6000)},
                {a: 2, b: '2', c: 'p', d: new Date(7000)},
            ],
            3: [
                {a: 3, b: '0', c: 't', d: new Date(8000)},
            ],
        });
    });

    it('on B', () => {
        expect.assertions(1);
        const result = groupArrayByObjectProperty(array, (element) => element.b);

        expect(result).toStrictEqual({
            0: [
                {a: 2, b: '0', c: 'x', d: new Date(6000)},
                {a: 1, b: '0', c: 'c', d: new Date(6000)},
                {a: 3, b: '0', c: 't', d: new Date(8000)},
            ],
            2: [
                {a: 1, b: '2', c: 'e', d: new Date(5000)},
                {a: 2, b: '2', c: 'p', d: new Date(7000)},
                {a: 1, b: '2', c: 'e', d: new Date(8000)},
            ],
        });
    });

    it('on C', () => {
        expect.assertions(1);
        const result = groupArrayByObjectProperty(array, (element) => element.c);

        expect(result).toStrictEqual({
            c: [
                {a: 1, b: '0', c: 'c', d: new Date(6000)},
            ],
            e: [
                {a: 1, b: '2', c: 'e', d: new Date(5000)},
                {a: 1, b: '2', c: 'e', d: new Date(8000)},
            ],
            p: [
                {a: 2, b: '2', c: 'p', d: new Date(7000)},
            ],
            t: [
                {a: 3, b: '0', c: 't', d: new Date(8000)},
            ],
            x: [
                {a: 2, b: '0', c: 'x', d: new Date(6000)},
            ],
        });
    });

    it('on D as number', () => {
        expect.assertions(1);
        const result = groupArrayByObjectProperty(array, (element) => element.d.getTime());

        expect(result).toStrictEqual({
            5000: [
                {a: 1, b: '2', c: 'e', d: new Date(5000)},
            ],
            6000: [
                {a: 2, b: '0', c: 'x', d: new Date(6000)},
                {a: 1, b: '0', c: 'c', d: new Date(6000)},
            ],
            7000: [
                {a: 2, b: '2', c: 'p', d: new Date(7000)},
            ],
            8000: [
                {a: 1, b: '2', c: 'e', d: new Date(8000)},
                {a: 3, b: '0', c: 't', d: new Date(8000)},
            ],
        });
    });

    it('on D as string', () => {
        expect.assertions(1);
        const result = groupArrayByObjectProperty(array, (element) => element.d.toISOString());

        expect(result).toStrictEqual({
            '1970-01-01T00:00:05.000Z': [
                {a: 1, b: '2', c: 'e', d: new Date(5000)},
            ],
            '1970-01-01T00:00:06.000Z': [
                {a: 2, b: '0', c: 'x', d: new Date(6000)},
                {a: 1, b: '0', c: 'c', d: new Date(6000)},
            ],
            '1970-01-01T00:00:07.000Z': [
                {a: 2, b: '2', c: 'p', d: new Date(7000)},
            ],
            '1970-01-01T00:00:08.000Z': [
                {a: 1, b: '2', c: 'e', d: new Date(8000)},
                {a: 3, b: '0', c: 't', d: new Date(8000)},
            ],
        });
    });
});
