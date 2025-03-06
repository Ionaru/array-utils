import { describe, expect, it } from "vitest";

import {
    objectsArrayToObject,
    objectToObjectsArray,
} from "./objects-array-to-object.js";

describe("objectsArrayToObject", () => {
    it("convert array to object", () => {
        expect.assertions(1);
        const array = [
            { oneKey: "oneValue", twoKey: "twoValue" },
            { oneKey: "threeValue", twoKey: "fourValue" },
        ];

        const result = objectsArrayToObject(array, (item) => item.twoKey);

        expect(result).toStrictEqual({
            fourValue: { oneKey: "threeValue", twoKey: "fourValue" },
            twoValue: { oneKey: "oneValue", twoKey: "twoValue" },
        });
    });

    it("convert array to object with number keys", () => {
        expect.assertions(2);
        const array = [
            { 1: "oneValue", 2: "twoValue" },
            { 1: "threeValue", 2: "fourValue" },
        ];

        const result = objectsArrayToObject(array, (item) => item[1]);
        expect(result).toStrictEqual({
            oneValue: { 1: "oneValue", 2: "twoValue" },
            threeValue: { 1: "threeValue", 2: "fourValue" },
        });

        const result2 = objectsArrayToObject(array, (item) => item["2"]);
        expect(result2).toStrictEqual({
            fourValue: { 1: "threeValue", 2: "fourValue" },
            twoValue: { 1: "oneValue", 2: "twoValue" },
        });
    });

    it("convert array to object with number values", () => {
        expect.assertions(1);
        const array = [
            { 1: 1, 2: 2 },
            { 1: 3, 2: 4 },
        ];

        const result = objectsArrayToObject(array, (item) => item[1]);
        expect(result).toStrictEqual({
            1: { 1: 1, 2: 2 },
            3: { 1: 3, 2: 4 },
        });
    });
});

describe("objectToObjectsArray", () => {
    it("converts an object to array", () => {
        expect.assertions(1);
        const object = {
            a: { oneKey: "oneValue", twoKey: "twoValue" },
            b: { oneKey: "threeValue", twoKey: "fourValue" },
        };

        const result = objectToObjectsArray(object);

        expect(result).toStrictEqual([
            { key: "a", oneKey: "oneValue", twoKey: "twoValue" },
            { key: "b", oneKey: "threeValue", twoKey: "fourValue" },
        ]);
    });

    it("converts an object with number as keys to array", () => {
        expect.assertions(1);
        const object = {
            1: { oneKey: "oneValue", twoKey: "twoValue" },
            6: { oneKey: "threeValue", twoKey: "fourValue" },
        };

        const result = objectToObjectsArray(object);

        expect(result).toStrictEqual([
            { key: "1", oneKey: "oneValue", twoKey: "twoValue" },
            { key: "6", oneKey: "threeValue", twoKey: "fourValue" },
        ]);
    });

    it("returns an array with the correct type", () => {
        expect.assertions(4);
        const object = {
            1: { oneKey: "oneValue", twoKey: "twoValue" },
        };

        const result = objectToObjectsArray(object);

        expect(result).toStrictEqual([
            { key: "1", oneKey: "oneValue", twoKey: "twoValue" },
        ]);

        expect(result[0].key).toBe("1");
        expect(result[0].oneKey).toBe("oneValue");
        expect(result[0].twoKey).toBe("twoValue");
    });
});
