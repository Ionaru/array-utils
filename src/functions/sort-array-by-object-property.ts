/**
 * Sort an array of objects by one of the object's properties (in-place).
 * @param array - The array to sort.
 * @param property - The property name to sort by. (can be property.property)
 * @param inverse - Inverse the output (descending).
 */
export function sortArrayByObjectProperty<T>(array: T[], property: string, inverse = false): T[] {

    function getPropertyFromPath(value: any): any {
        const getObjectValue = (object: any, key: string): any => object[key];
        return property.split('.').reduce(getObjectValue, value);
    }

    function checkIfEqualTypes(left: any, right: any): void {
        if (left === undefined || right === undefined) {
            throw new Error(`Unable to compare values '${left}' and '${right}'`);
        }

        if (typeof left !== typeof right) {
            throw new Error(`Unable to compare different types: '${left}' (${typeof left}) and '${right}' (${typeof right})`);
        }
    }

    const compare = (a: any, b: any) => {
        let left = getPropertyFromPath(a);
        let right = getPropertyFromPath(b);

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
}
