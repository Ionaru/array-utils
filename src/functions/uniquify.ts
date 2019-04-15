export function uniquifyArray<T>(array: T[]): T[] {
    return array.filter((element, index, self) => index === self.indexOf(element));
}
