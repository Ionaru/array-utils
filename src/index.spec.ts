import {
    generateNumbersArray,
    groupArrayByObjectProperty,
    objectsArrayToObject,
    sortArrayByObjectProperty,
    uniquifyArray,
    uniquifyObjectsArray,
} from './index';

test('exports', () => {
    expect(generateNumbersArray).toBeTruthy();
    expect(objectsArrayToObject).toBeTruthy();
    expect(sortArrayByObjectProperty).toBeTruthy();
    expect(uniquifyArray).toBeTruthy();
    expect(uniquifyObjectsArray).toBeTruthy();
    expect(groupArrayByObjectProperty).toBeTruthy();
});
