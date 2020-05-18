/**
 * Sort an array of objects by one of the object's properties (in-place).
 * @param array - The array to sort.
 * @param attributeGetter - The property name to sort by. (can be property.property)
 * @param inverse - Inverse the output (descending).
 */
// eslint-disable-next-line max-len,sonarjs/cognitive-complexity
export const sortArrayByObjectProperty = <T>(array: T[], attributeGetter: string | ((item: T) => string | number | undefined), inverse = false): T[] => {

    let propertyIsString = false;
    if (typeof attributeGetter === 'string') {
        // eslint-disable-next-line no-console,max-len
        console.warn('Using sortArrayByObjectProperty(T[], string, boolean) is deprecated, use a selector function as the second parameter.');
        propertyIsString = true;
    }

    const getPropertyFromPath = (value: any): any => {
        const getObjectValue = (object: any, key: string): any => object[key];
        return (attributeGetter as string).split('.').reduce(getObjectValue, value);
    };

    const checkIfEqualTypes = (left: any, right: any): void => {
        if (left === undefined || right === undefined) {
            throw new Error(`Unable to compare values '${left}' and '${right}'`);
        }

        if (typeof left !== typeof right) {
            throw new Error(`Unable to compare different types: '${left}' (${typeof left}) and '${right}' (${typeof right})`);
        }
    };

    const compare = (a: any, b: any) => {
        // @ts-ignore
        let left = propertyIsString ? getPropertyFromPath(a) : attributeGetter(a);
        // @ts-ignore
        let right = propertyIsString ? getPropertyFromPath(b) : attributeGetter(b);

        checkIfEqualTypes(left, right);

        // We know the types are the same, but it's better to make absolutely sure.
        if (typeof left === 'string' && typeof right === 'string') {
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

    return array.sort(compare);
};
