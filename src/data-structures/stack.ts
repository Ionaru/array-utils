import { Tube } from './tube';

export class Stack<T> extends Tube<T> {

    public push(value: T): void {
        if (this.isFull) {
            throw new Error('Stack is full!');
        }
        this.tubeArray.push(value);
    }

    public pop(): T | undefined {
        return this.tubeArray.pop();
    }

    public peek(): T | undefined {
        return this.tubeArray[this.length - 1];
    }
}
