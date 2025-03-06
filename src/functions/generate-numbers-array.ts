/**
 * Creates an array with numbers.
 * @param length - The length of the desired array.
 * @param start - The number to start counting at, can be negative, default: 1.
 * @param step - The amount to increase in each step, can be negative, default: 1.
 */
export const generateNumbersArray = (
    length: number,
    start = 1,
    step = 1,
): number[] => {
    if (length < 0 || !Number.isInteger(length)) {
        throw new RangeError("Invalid array length");
    }

    // If step === 0
    // Return step || 0

    // If step !== 0
    // Return (start + (index * step)) || 0

    const stepper =
        step === 0
            ? () => start || 0
            : (index: number) => start + index * step || 0;
    return Array.from({ length }).map((_, index) => stepper(index));
};
