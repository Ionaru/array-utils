import { generateNumbersArray, objectsArrayToObject, sortArrayByObjectProperty, uniquifyArray } from './index';

test('exports', () => {
    expect(generateNumbersArray).toBeTruthy();
    expect(objectsArrayToObject).toBeTruthy();
    expect(sortArrayByObjectProperty).toBeTruthy();
    expect(uniquifyArray).toBeTruthy();
});
