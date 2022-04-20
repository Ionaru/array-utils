/**
 * Return an object of arrays grouped by a specific object attribute.
 * @param array - The array to group.
 * @param attributeGetter - A function for getting the attribute to group on.
 */
export const groupArrayByObjectProperty = <T extends Record<string, any>>(
    array: T[], attributeGetter: (item: T) => keyof any
): Record<keyof any, T[]> => array.reduce(
        (previous, current) => ({
            ...previous,
            [attributeGetter(current)]: [...(previous[attributeGetter(current)] || []), current],
        }),
        {} as Record<keyof any, T[]>,
    );
