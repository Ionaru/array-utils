export function generateNumbersArray(length: number): number[] {
    return Array(length).fill(undefined).map((_, i) => i + 1);
}
