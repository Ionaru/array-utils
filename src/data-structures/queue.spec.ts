import { Queue } from './queue';

describe('queue', () => {

    it('has length 0 by default', () => {
        expect.assertions(2);
        const queue = new Queue();
        expect(queue.tube).toHaveLength(0);
        expect(queue).toHaveLength(0);
    });

    it('is empty by default', () => {
        expect.assertions(1);
        const queue = new Queue();
        expect(queue.isEmpty).toBe(true);
    });

    it('is not full by default', () => {
        expect.assertions(1);
        const queue = new Queue();
        expect(queue.isFull).toBe(false);
    });

    it('does not dequeue any elements when empty', () => {
        expect.assertions(1);
        const queue = new Queue();
        expect(queue.dequeue()).toBeUndefined();
    });

    it('does not peek any elements when empty', () => {
        expect.assertions(1);
        const queue = new Queue();
        expect(queue.peek()).toBeUndefined();
    });

    it('throws an error when created using zero length', () => {
        expect.assertions(1);
        expect(() => new Queue(0)).toThrow('maxLength must be an integer greater than zero when defined.');
    });

    it('throws an error when created using a negative length', () => {
        expect.assertions(1);
        expect(() => new Queue(-1)).toThrow('maxLength must be an integer greater than zero when defined.');
    });

    it('throws an error when created using a non-integer length', () => {
        expect.assertions(1);
        expect(() => new Queue(1.1)).toThrow('maxLength must be an integer greater than zero when defined.');
    });

    it('does not throw an error when created using undefined length', () => {
        expect.assertions(1);
        expect(() => new Queue(undefined)).not.toThrow('maxLength must be an integer greater than zero when defined.');
    });

    it('shows normal queue behaviour', () => {
        expect.assertions(26);
        const queue = new Queue<number>(1);
        expect(queue.isEmpty).toBe(true);
        expect(queue.isFull).toBe(false);
        expect(queue.tube).toHaveLength(0);
        expect(queue).toHaveLength(0);

        queue.enqueue(5);
        expect(queue.isEmpty).toBe(false);
        expect(queue.isFull).toBe(true);
        expect(queue.tube).toHaveLength(1);
        expect(queue).toHaveLength(1);
        expect(queue.peek()).toBe(5);

        expect(() => queue.enqueue(5)).toThrow('Queue is full!');

        queue.dequeue();
        expect(queue.isEmpty).toBe(true);
        expect(queue.isFull).toBe(false);
        expect(queue.tube).toHaveLength(0);
        expect(queue).toHaveLength(0);
        expect(queue.peek()).toBeUndefined();

        expect(queue.dequeue()).toBeUndefined();

        queue.enqueue(6);
        expect(queue.isEmpty).toBe(false);
        expect(queue.isFull).toBe(true);
        expect(queue.tube).toHaveLength(1);
        expect(queue).toHaveLength(1);
        expect(queue.peek()).toBe(6);

        queue.clear();
        expect(queue.isEmpty).toBe(true);
        expect(queue.isFull).toBe(false);
        expect(queue.tube).toHaveLength(0);
        expect(queue).toHaveLength(0);
        expect(queue.peek()).toBeUndefined();
    });

});
