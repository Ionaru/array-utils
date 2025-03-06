import { describe, expect, it } from "vitest";

import { Stack } from "./stack.js";

describe("stack", () => {
    it("has length 0 by default", () => {
        expect.assertions(2);
        const stack = new Stack();
        expect(stack.tube).toHaveLength(0);
        expect(stack).toHaveLength(0);
    });

    it("is empty by default", () => {
        expect.assertions(1);
        const stack = new Stack();
        expect(stack.isEmpty).toBe(true);
    });

    it("is not full by default", () => {
        expect.assertions(1);
        const stack = new Stack();
        expect(stack.isFull).toBe(false);
    });

    it("does not destack any elements when empty", () => {
        expect.assertions(1);
        const stack = new Stack();
        expect(stack.pop()).toBeUndefined();
    });

    it("does not peek any elements when empty", () => {
        expect.assertions(1);
        const stack = new Stack();
        expect(stack.peek()).toBeUndefined();
    });

    it("throws an error when created using zero length", () => {
        expect.assertions(1);
        expect(() => new Stack(0)).toThrow(
            "maxLength must be an integer greater than zero when defined.",
        );
    });

    it("throws an error when created using a negative length", () => {
        expect.assertions(1);
        expect(() => new Stack(-1)).toThrow(
            "maxLength must be an integer greater than zero when defined.",
        );
    });

    it("throws an error when created using a non-integer length", () => {
        expect.assertions(1);
        expect(() => new Stack(1.1)).toThrow(
            "maxLength must be an integer greater than zero when defined.",
        );
    });

    it("does not throw an error when created using undefined length", () => {
        expect.assertions(1);
        expect(() => new Stack(undefined)).not.toThrow(
            "maxLength must be an integer greater than zero when defined.",
        );
    });

    it("can stack a value", () => {
        expect.assertions(1);
        const stack = new Stack(1);
        stack.push("a");
        expect(stack.tube).toHaveLength(1);
    });

    it("can stack multiple values", () => {
        expect.assertions(1);
        const stack = new Stack(3);
        stack.push("a");
        stack.push("b");
        stack.push("c");
        expect(stack.tube).toHaveLength(3);
    });

    it("can stack multiple values when length is not defined", () => {
        expect.assertions(1);
        const stack = new Stack();
        stack.push("a");
        stack.push("b");
        stack.push("c");
        expect(stack.tube).toHaveLength(3);
    });

    it("should return true on isEmpty when empty", () => {
        expect.assertions(1);
        const stack = new Stack();
        expect(stack.isEmpty).toBe(true);
    });

    it("should return false on isEmpty when not empty", () => {
        expect.assertions(1);
        const stack = new Stack();
        stack.push("a");
        expect(stack.isEmpty).toBe(false);
    });

    it("should return true on isFull when full", () => {
        expect.assertions(1);
        const stack = new Stack(1);
        stack.push("a");
        expect(stack.isFull).toBe(true);
    });

    it("should return false on isFull when not full", () => {
        expect.assertions(1);
        const stack = new Stack(2);
        stack.push("a");
        expect(stack.isFull).toBe(false);
    });

    it("should return false on isFull when empty", () => {
        expect.assertions(1);
        const stack = new Stack();
        expect(stack.isFull).toBe(false);
    });

    it("should throw an error when pushing to a full stack", () => {
        expect.assertions(1);
        const stack = new Stack(1);
        stack.push("a");
        expect(() => {
            stack.push("b");
        }).toThrow("Stack is full!");
    });

    it("should return undefined when popping from an empty stack", () => {
        expect.assertions(1);
        const stack = new Stack();
        expect(stack.pop()).toBeUndefined();
    });

    it("should return the last element when popping from a non-empty stack", () => {
        expect.assertions(1);
        const stack = new Stack();
        stack.push("a");
        stack.push("b");
        stack.push("c");
        expect(stack.pop()).toBe("c");
    });

    it("should return undefined when peeking from an empty stack", () => {
        expect.assertions(1);
        const stack = new Stack();
        expect(stack.peek()).toBeUndefined();
    });

    it("should return the last element when peeking from a non-empty stack", () => {
        expect.assertions(1);
        const stack = new Stack();
        stack.push("a");
        stack.push("b");
        stack.push("c");
        expect(stack.peek()).toBe("c");
    });

    it("should return the correct length", () => {
        expect.assertions(1);
        const stack = new Stack(2);
        stack.push("a");
        stack.push("b");
        expect(stack).toHaveLength(2);
    });

    it("should clear the stack", () => {
        expect.assertions(1);
        const stack = new Stack(2);
        stack.push("a");
        stack.push("b");
        stack.clear();
        expect(stack).toHaveLength(0);
    });

    it("lets elements exit in stack order", () => {
        expect.assertions(3);
        const stack = new Stack<number>(2);
        stack.push(1);
        stack.push(2);
        expect(stack).toHaveLength(2);
        expect(stack.pop()).toBe(2);
        expect(stack.pop()).toBe(1);
    });
});
