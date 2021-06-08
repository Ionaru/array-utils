import { Tube } from './tube';

export class Queue<T> extends Tube<T> {

    public enqueue(value: T): void {
        if (this.isFull) {
            throw new Error('Queue is full!');
        }
        this.tubeArray.push(value);
    }

    public dequeue(): T | undefined {
        return this.tubeArray.shift();
    }

    public peek(): T | undefined {
        return this.tubeArray[0];
    }
}
