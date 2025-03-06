import { describe, expect, it } from "vitest";

import { getRandomItemFromArray } from "./get-random-item-from-array.js";

describe("getRandomItemFromArray", () => {
    it("should return a random item from an array", () => {
        expect.assertions(2);

        const array = [1, 2, 3, 4, 5];
        const randomItem = getRandomItemFromArray(array);

        expect(array).toContain(randomItem);
        expect(array).toHaveLength(5);
    });

    it("should return a random item from an array and remove it", () => {
        expect.assertions(2);

        const array = [1, 2, 3, 4, 5];
        const randomItem = getRandomItemFromArray(array, true);

        expect(array).not.toContain(randomItem);
        expect(array).toHaveLength(4);
    });

    it("should throw an error when the array is empty", () => {
        expect.assertions(1);

        const array: number[] = [];

        expect(() => getRandomItemFromArray(array)).toThrow("Array is empty");
    });
});
