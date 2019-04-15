export function uniquifyArray<T>(array: T[]): T[] {
    return array.filter((elem, index, self) => index === self.indexOf(elem));
}
