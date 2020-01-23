/**
 * Return an array with all duplicate values stripped out.
 * @param array - The array to sort.
 */
export const uniquifyArray = <T>(array: T[]): T[] => [...new Set(array)];

/**
 * Return an array of objects with all duplicate values of a single attribute stripped out.
 * @param array - The array to sort.
 * @param attributeGetter - A function for getting the attribute to uniquify on.
 */
export const uniquifyObjectsArray = <T>(array: T[], attributeGetter: (item: T) => number | string): T[] => {
    const map = array.map((element) => attributeGetter(element));
    return array.filter((element, index) => map.indexOf(attributeGetter(element)) === index);
};
