export const getRandomItemFromArray = <T>(array: T[], remove = false): T => {
    if (array.length === 0) {
        throw new Error('Array is empty');
    }

    const index = Math.floor(Math.random() * array.length);
    const item = array[index];
    if (remove) {
        array.splice(index, 1);
    }
    return item;
};
