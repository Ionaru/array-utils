type SortableProperty = string | number | Date;

const checkIfEqualTypes = (
    left: SortableProperty,
    right: SortableProperty,
): void => {
    if (left === undefined || right === undefined) {
        throw new Error(`Unable to compare values '${left}' and '${right}'`);
    }

    if (typeof left !== typeof right) {
        throw new TypeError(
            `Unable to compare different types: '${left}' (${typeof left}) and '${right}' (${typeof right})`,
        );
    }
};

/**
 * Sort an array of objects by one of the object's properties (in-place).
 * @param array - The array to sort.
 * @param attributeGetter - A function to fetch the property from the object.
 * @param inverse - Inverse the output (descending).
 */
export const sortArrayByObjectProperty = <T>(
    array: T[],
    attributeGetter: (item: T) => SortableProperty,
    inverse = false,
): void => {
    const compare = (a: T, b: T) => {
        let left = attributeGetter(a);
        let right = attributeGetter(b);

        checkIfEqualTypes(left, right);

        // We know the types are the same, but it's better to make absolutely sure.
        if (typeof left === "string" && typeof right === "string") {
            left = left.toUpperCase();
            right = right.toUpperCase();
        }

        if (left < right) {
            return inverse ? 1 : -1;
        }
        if (left > right) {
            return inverse ? -1 : 1;
        }
        return 0;
    };

    array.sort(compare);
};
