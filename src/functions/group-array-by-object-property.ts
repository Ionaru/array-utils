/**
 * Return an object of arrays grouped by a specific object attribute.
 * @param array - The array to group.
 * @param attributeGetter - A function for getting the attribute to group on.
 */
export const groupArrayByObjectProperty = <
    T extends Record<string, unknown>,
    K extends PropertyKey,
>(
    array: T[],
    attributeGetter: (item: T) => K,
): Record<K, T[]> => {
    const result = {} as Record<K, T[]>;

    for (const item of array) {
        const value = attributeGetter(item);

        if (!result[value]) {
            result[value] = [];
        }

        result[value].push(item);
    }

    return result;
};
