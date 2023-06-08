/**
 * Get the key names from a Typescript number-Enum.
 * @param numberEnum - The enum to get the key names from.
 */
export const getNumberEnumKeys = <T extends object>(numberEnum: T): Array<keyof T> => Object.values(numberEnum)
    .filter((x) => Number.isNaN(Number(x)));

/**
 * Get the values from a Typescript number-Enum.
 * @param numberEnum - The enum to get the values from.
 */
export const getNumberEnumValues = <T extends object>(numberEnum: T): Array<T[keyof T]> => Object.values(numberEnum)
    .filter((x) => !Number.isNaN(Number(x))).map((x) => Number(x) as unknown as T[keyof T]);
