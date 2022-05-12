/**
 * Sort an array of objects by the length of the object's properties (in-place).
 * @param array - The array to sort.
 * @param attributeGetter - A function to fetch the property from the object.
 * @param inverse - Inverse the output (descending).
 */
export const sortArrayByObjectPropertyLength = <T>(
    array: T[], attributeGetter: (item: T) => { length: number; }, inverse = false
): void => {

    const compare = (a: any, b: any) => {
        const left = attributeGetter(a).length;
        const right = attributeGetter(b).length;
        return inverse ? right - left : left - right;
    };

    array.sort(compare);
};
