export function uniquifyArray<T>(array: T[]): T[] {
    return [...new Set(array)];
}
