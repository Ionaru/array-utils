/**
 * Convert an array containing objects to an object containing objects.
 * @param array - The array to convert.
 * @param attributeGetter - A function for getting the attribute to group on.
 */
export const objectsArrayToObject = <T>(array: T[], attributeGetter: (item: T) => string | number): { [index: string]: T } => {

    const object: { [index: string]: T } = {};

    for (const item of array) {
        object[attributeGetter(item)] = item;
    }

    return object;
};
