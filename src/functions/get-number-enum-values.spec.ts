import { getNumberEnumKeys, getNumberEnumValues } from './get-number-enum-values';

enum MyNumberEnum {
    ValueZero,
    ValueOne,
    ValueTwo,
}

enum MyOneIndexedNumberEnum {
    ValueOne = 1,
    ValueTwo,
    ValueThree,
}

describe('getNumberEnumKeys', () => {

    it('zero-indexed enum', () => {
        expect.assertions(1);
        const values = getNumberEnumKeys(MyNumberEnum);
        expect(values).toStrictEqual([
            'ValueZero',
            'ValueOne',
            'ValueTwo',
        ]);
    });

    it('one-indexed enum', () => {
        expect.assertions(1);
        const values = getNumberEnumKeys(MyOneIndexedNumberEnum);
        expect(values).toStrictEqual([
            'ValueOne',
            'ValueTwo',
            'ValueThree',
        ]);
    });

});

describe('getNumberEnumValues', () => {

    it('zero-indexed enum', () => {
        expect.assertions(1);
        const values = getNumberEnumValues(MyNumberEnum);
        expect(values).toStrictEqual([
            MyNumberEnum.ValueZero,
            MyNumberEnum.ValueOne,
            MyNumberEnum.ValueTwo,
        ]);
    });

    it('one-indexed enum', () => {
        expect.assertions(1);
        const values = getNumberEnumValues(MyOneIndexedNumberEnum);
        expect(values).toStrictEqual([
            MyOneIndexedNumberEnum.ValueOne,
            MyOneIndexedNumberEnum.ValueTwo,
            MyOneIndexedNumberEnum.ValueThree,
        ]);
    });

});
