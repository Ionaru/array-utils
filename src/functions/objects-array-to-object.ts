export function objectsArrayToObject<T>(array: T[], key: string) {

    const object: {[index: string]: T} = {};

    for (const item of array) {
        // @ts-ignore
        object[item[key] as string] = item;
    }

    return object;
}
