import { Stack } from './stack';

describe('stack', () => {

    it('has length 0 by default', () => {
        expect.assertions(2);
        const stack = new Stack();
        expect(stack.tube).toHaveLength(0);
        expect(stack).toHaveLength(0);
    });

    it('is empty by default', () => {
        expect.assertions(1);
        const stack = new Stack();
        expect(stack.isEmpty).toBe(true);
    });

    it('is not full by default', () => {
        expect.assertions(1);
        const stack = new Stack();
        expect(stack.isFull).toBe(false);
    });

    it('does not destack any elements when empty', () => {
        expect.assertions(1);
        const stack = new Stack();
        expect(stack.pop()).toBeUndefined();
    });

    it('does not peek any elements when empty', () => {
        expect.assertions(1);
        const stack = new Stack();
        expect(stack.peek()).toBeUndefined();
    });

    it('throws an error when created using zero length', () => {
        expect.assertions(1);
        expect(() => new Stack(0)).toThrow('maxLength must be an integer greater than zero when defined.');
    });

    it('throws an error when created using a negative length', () => {
        expect.assertions(1);
        expect(() => new Stack(-1)).toThrow('maxLength must be an integer greater than zero when defined.');
    });

    it('throws an error when created using a non-integer length', () => {
        expect.assertions(1);
        expect(() => new Stack(1.1)).toThrow('maxLength must be an integer greater than zero when defined.');
    });

    it('does not throw an error when created using undefined length', () => {
        expect.assertions(1);
        expect(() => new Stack(undefined)).not.toThrow('maxLength must be an integer greater than zero when defined.');
    });

    it('shows normal stack behaviour', () => {
        expect.assertions(26);
        const stack = new Stack<number>(1);
        expect(stack.isEmpty).toBe(true);
        expect(stack.isFull).toBe(false);
        expect(stack.tube).toHaveLength(0);
        expect(stack).toHaveLength(0);

        stack.push(5);
        expect(stack.isEmpty).toBe(false);
        expect(stack.isFull).toBe(true);
        expect(stack.tube).toHaveLength(1);
        expect(stack).toHaveLength(1);
        expect(stack.peek()).toBe(5);

        expect(() => stack.push(5)).toThrow('Stack is full!');

        stack.pop();
        expect(stack.isEmpty).toBe(true);
        expect(stack.isFull).toBe(false);
        expect(stack.tube).toHaveLength(0);
        expect(stack).toHaveLength(0);
        expect(stack.peek()).toBeUndefined();

        expect(stack.pop()).toBeUndefined();

        stack.push(6);
        expect(stack.isEmpty).toBe(false);
        expect(stack.isFull).toBe(true);
        expect(stack.tube).toHaveLength(1);
        expect(stack).toHaveLength(1);
        expect(stack.peek()).toBe(6);

        stack.clear();
        expect(stack.isEmpty).toBe(true);
        expect(stack.isFull).toBe(false);
        expect(stack.tube).toHaveLength(0);
        expect(stack).toHaveLength(0);
        expect(stack.peek()).toBeUndefined();
    });

    it('lets elements exit in stack order', () => {
        expect.assertions(3);
        const stack = new Stack<number>(2);
        stack.push(1);
        stack.push(2);
        expect(stack).toHaveLength(2);
        expect(stack.pop()).toBe(2);
        expect(stack.pop()).toBe(1);
    });

});
