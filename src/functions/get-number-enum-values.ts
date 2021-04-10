/**
 * Get the key names from a Typescript number-Enum.
 * @param numberEnum - The enum to get the key names from.
 */
export const getNumberEnumKeys = <T>(numberEnum: T): T[] => Object.values(numberEnum).filter((x) => isNaN(x));


/**
 * Get the values from a Typescript number-Enum.
 * @param numberEnum - The enum to get the values from.
 */
export const getNumberEnumValues = <T>(numberEnum: T): T[] => Object.values(numberEnum)
    .filter((x) => !isNaN(x)).map((x) => Number(x) as unknown as T);
