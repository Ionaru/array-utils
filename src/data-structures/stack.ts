import { Tube } from "./tube.js";

export class Stack<T> extends Tube<T> {
    // Aliases
    public push = (...value: T[]): void => {
        this.addFunction(...value);
    };
    public pop = (): T | undefined => this.removeFunction();
    public peek = (): T | undefined => this.peekFunction();

    protected addFunction(...value: T[]): void {
        if (this.isFull) {
            throw new Error("Stack is full!");
        }
        this.tubeArray.push(...value);
    }

    protected removeFunction(): T | undefined {
        return this.tubeArray.pop();
    }

    protected peekFunction(): T | undefined {
        return this.tubeArray.at(-1);
    }
}
