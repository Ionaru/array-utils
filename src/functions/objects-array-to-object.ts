export function objectsArrayToObject<T>(array: any[], key: string): T {

    const object: any = {};

    for (const item of array) {
        object[item[key]] = item;
    }

    return object;
}
