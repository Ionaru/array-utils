export abstract class Tube<T> {
    protected readonly tubeArray: T[] = [];

    public constructor(public readonly maxLength?: number) {
        if (
            this.maxLength !== undefined &&
            (this.maxLength < 1 || !Number.isInteger(this.maxLength))
        ) {
            throw new Error(
                "maxLength must be an integer greater than zero when defined.",
            );
        }
    }

    public get isEmpty(): boolean {
        return this.length === 0;
    }

    public get isFull(): boolean {
        return this.length === this.maxLength;
    }

    public get length(): number {
        return this.tubeArray.length;
    }

    /**
     * Provide a frozen copy of the internal array.
     */
    public get tube(): readonly T[] {
        return Object.freeze([...this.tubeArray]);
    }

    public clear(): void {
        this.tubeArray.length = 0;
    }

    // These should be implemented and renamed.
    protected abstract addFunction(...value: T[]): void;
    protected abstract removeFunction(): T | undefined;
    protected abstract peekFunction(): T | undefined;
}
