/**
 * Filter 'undefined' elements from an array.
 * @param array - The array to filter.
 */
export const filterArray = <T>(array: Array<T | undefined>): T[] => array.filter((element): element is T => element !== undefined);
