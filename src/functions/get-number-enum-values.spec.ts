import { describe, expect, it } from "vitest";

import {
    getNumberEnumKeys,
    getNumberEnumValues,
} from "./get-number-enum-values.js";

enum MyNumberEnum {
    VALUE_ZERO,
    VALUE_ONE,
    VALUE_TWO,
}

enum MyOneIndexedNumberEnum {
    VALUE_ONE = 1,
    VALUE_TWO,
    VALUE_THREE,
}

describe("getNumberEnumKeys", () => {
    it("zero-indexed enum", () => {
        expect.assertions(1);
        const values = getNumberEnumKeys(MyNumberEnum);
        expect(values).toStrictEqual(["VALUE_ZERO", "VALUE_ONE", "VALUE_TWO"]);
    });

    it("one-indexed enum", () => {
        expect.assertions(1);
        const values = getNumberEnumKeys(MyOneIndexedNumberEnum);
        expect(values).toStrictEqual(["VALUE_ONE", "VALUE_TWO", "VALUE_THREE"]);
    });
});

describe("getNumberEnumValues", () => {
    it("zero-indexed enum", () => {
        expect.assertions(1);
        const values = getNumberEnumValues(MyNumberEnum);
        expect(values).toStrictEqual([
            MyNumberEnum.VALUE_ZERO,
            MyNumberEnum.VALUE_ONE,
            MyNumberEnum.VALUE_TWO,
        ]);
    });

    it("one-indexed enum", () => {
        expect.assertions(1);
        const values = getNumberEnumValues(MyOneIndexedNumberEnum);
        expect(values).toStrictEqual([
            MyOneIndexedNumberEnum.VALUE_ONE,
            MyOneIndexedNumberEnum.VALUE_TWO,
            MyOneIndexedNumberEnum.VALUE_THREE,
        ]);
    });
});
