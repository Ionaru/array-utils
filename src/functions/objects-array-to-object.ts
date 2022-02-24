/**
 * Convert an array containing objects to an object containing objects.
 * @param array - The array to convert.
 * @param attributeGetter - A function for getting the attribute to group on.
 */
export const objectsArrayToObject = <T>(
    array: T[], attributeGetter: (item: T) => string | number
): Record<string, T> => {

    const object: Record<string, T> = {};

    for (const item of array) {
        object[attributeGetter(item)] = item;
    }

    return object;
};

/**
 * Convert an object containing objects to an array containing objects.
 * The object key will be added to the array as an attribute named 'key'.
 * @param object - The object to convert.
 */
export const objectToObjectsArray = <T>(
    object: Record<string, T>
): T[] => {

    type ArrayType = T & Record<'key', string>;

    const array: ArrayType[] = [];

    for (const [key, value] of Object.entries(object) as Array<[string, ArrayType]>) {
        array.push({ ...value, key });
    }

    return array;
};
