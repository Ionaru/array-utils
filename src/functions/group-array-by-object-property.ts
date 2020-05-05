/**
 * Return an object of arrays grouped by a specific object attribute.
 * @param array - The array to group.
 * @param attributeGetter - A function for getting the attribute to group on.
 */
export const groupArrayByObjectProperty = <T extends any, K extends keyof T>(
    array: T[], attributeGetter: (item: T) => number | string,
): Record<T[K], T[]> => array.reduce(
        (previous, current) => {
            const value = attributeGetter(current);
            previous[value] = (previous[value] || []).concat(current);
            return previous;
        },
    {} as Record<T[K], T[]>,
    );
