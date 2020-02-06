export const objectsArrayToObject = <T>(array: T[], attributeGetter: string | ((item: T) => string | number)) => {

    let keyIsString = false;
    if (typeof attributeGetter === 'string') {
        // eslint-disable-next-line no-console
        console.warn('Using objectsArrayToObject(T[], string) is deprecated, use a selector function as the second parameter.');
        keyIsString = true;
    }

    const object: { [index: string]: T } = {};

    for (const item of array) {
        // @ts-ignore
        const key = keyIsString ? item[attributeGetter] as string : attributeGetter(item);
        object[key] = item;
    }

    return object;
};
