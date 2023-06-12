import { describe, expect, it } from 'vitest';

import { Queue } from './queue.js';

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
        expect(() => new Queue(0)).toThrow(
            'maxLength must be an integer greater than zero when defined.',
        );
    });

    it('throws an error when created using a negative length', () => {
        expect.assertions(1);
        expect(() => new Queue(-1)).toThrow(
            'maxLength must be an integer greater than zero when defined.',
        );
    });

    it('throws an error when created using a non-integer length', () => {
        expect.assertions(1);
        expect(() => new Queue(1.1)).toThrow(
            'maxLength must be an integer greater than zero when defined.',
        );
    });

    it('does not throw an error when created using undefined length', () => {
        expect.assertions(1);
        expect(() => new Queue(undefined)).not.toThrow(
            'maxLength must be an integer greater than zero when defined.',
        );
    });

    it('can queue a value', () => {
        expect.assertions(1);
        const queue = new Queue(1);
        queue.enqueue('a');
        expect(queue.tube).toHaveLength(1);
    });

    it('can queue multiple values', () => {
        expect.assertions(1);
        const queue = new Queue(3);
        queue.enqueue('a');
        queue.enqueue('b');
        queue.enqueue('c');
        expect(queue.tube).toHaveLength(3);
    });

    it('can queue multiple values when length is not defined', () => {
        expect.assertions(1);
        const queue = new Queue();
        queue.enqueue('a');
        queue.enqueue('b');
        queue.enqueue('c');
        expect(queue.tube).toHaveLength(3);
    });

    it('should return true on isEmpty when empty', () => {
        expect.assertions(1);
        const queue = new Queue();
        expect(queue.isEmpty).toBe(true);
    });

    it('should return false on isEmpty when not empty', () => {
        expect.assertions(1);
        const queue = new Queue();
        queue.enqueue('a');
        expect(queue.isEmpty).toBe(false);
    });

    it('should return true on isFull when full', () => {
        expect.assertions(1);
        const queue = new Queue(1);
        queue.enqueue('a');
        expect(queue.isFull).toBe(true);
    });

    it('should return false on isFull when not full', () => {
        expect.assertions(1);
        const queue = new Queue(2);
        queue.enqueue('a');
        expect(queue.isFull).toBe(false);
    });

    it('should return false on isFull when empty', () => {
        expect.assertions(1);
        const queue = new Queue();
        expect(queue.isFull).toBe(false);
    });

    it('should throw an error when pushing to a full queue', () => {
        expect.assertions(1);
        const queue = new Queue(1);
        queue.enqueue('a');
        expect(() => queue.enqueue('b')).toThrow('Queue is full!');
    });

    it('should return undefined when dequeuing from an empty queue', () => {
        expect.assertions(1);
        const queue = new Queue();
        expect(queue.dequeue()).toBeUndefined();
    });

    it('should return the first element when dequeuing from a non-empty queue', () => {
        expect.assertions(1);
        const queue = new Queue();
        queue.enqueue('a');
        queue.enqueue('b');
        queue.enqueue('c');
        expect(queue.dequeue()).toBe('a');
    });

    it('should return undefined when peeking from an empty queue', () => {
        expect.assertions(1);
        const queue = new Queue();
        expect(queue.peek()).toBeUndefined();
    });

    it('should return the first element when peeking from a non-empty queue', () => {
        expect.assertions(1);
        const queue = new Queue();
        queue.enqueue('a');
        queue.enqueue('b');
        queue.enqueue('c');
        expect(queue.peek()).toBe('a');
    });

    it('should return the correct length', () => {
        expect.assertions(1);
        const queue = new Queue(2);
        queue.enqueue('a');
        queue.enqueue('b');
        expect(queue).toHaveLength(2);
    });

    it('should clear the queue', () => {
        expect.assertions(1);
        const queue = new Queue(2);
        queue.enqueue('a');
        queue.enqueue('b');
        queue.clear();
        expect(queue).toHaveLength(0);
    });

    it('lets elements exit in queue order', () => {
        expect.assertions(3);
        const queue = new Queue<number>(2);
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue).toHaveLength(2);
        expect(queue.dequeue()).toBe(1);
        expect(queue.dequeue()).toBe(2);
    });
});
