import { Tube } from "./tube.js";

export class Queue<T> extends Tube<T> {
    // Aliases
    public enqueue = (...value: T[]) => {
        this.addFunction(...value);
    };
    public dequeue = () => this.removeFunction();
    public peek = () => this.peekFunction();

    protected addFunction(...value: T[]): void {
        if (this.isFull) {
            throw new Error("Queue is full!");
        }
        this.tubeArray.push(...value);
    }

    protected removeFunction(): T | undefined {
        return this.tubeArray.shift();
    }

    protected peekFunction(): T | undefined {
        return this.tubeArray.at(0);
    }
}
