export abstract class Tube<T> {

    protected readonly tubeArray: T[] = [];

    public constructor(
        public readonly maxLength?: number,
    ) {}

    public get isEmpty(): boolean {
        return !!this.length;
    }

    public get isFull(): boolean {
        return this.length === this.maxLength;
    }

    public get length(): number {
        return this.tubeArray.length;
    }

    public clear(): void {
        while (!this.isEmpty) {
            this.tubeArray.pop();
        }
    }

    public get tube(): readonly T[] {
        return Object.freeze([...this.tubeArray]);
    }

}
