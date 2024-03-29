/**
 * Split an array into chunks of the given size.
 * @param array - The array to split.
 * @param chunkSize - The desired size of the chunks, can be any positive number.
 */
export const splitArrayIntoChunks = <T>(
    array: T[],
    chunkSize: number,
): T[][] => {
    if (chunkSize <= 0) {
        return [array];
    }

    const chunks: T[][] = [];
    for (let index = 0; index < array.length; index += chunkSize) {
        chunks.push(array.slice(index, index + chunkSize));
    }
    return chunks;
};
