/**
 * Created by Bandula Gamage on 28/05/2019.
 */

const testUtils     = require('../shared/test-utils');
const commonUtils   = require('../../app/utils/common-utils');

let testConditionNo = 0;

/**
 * Evaluates the accuracy of data processing definitions
 */
describe('TEST COMMON UTILS FUNCTIONS', function () {

    it('\tTest condition #' + testUtils.getGlobalTestConditionNo() + ' [ Scenario No: ' + getNextTestConditionNo() + ']: Test Gender Identification', function () {
        expect(commonUtils.isGenderFemale('Male')).toBe(false);
    });

    it('\tTest condition #' + testUtils.getGlobalTestConditionNo() + ' [ Scenario No: ' + getNextTestConditionNo() + ']: Test Pet Type Identification', function () {
        expect(commonUtils.isPetTypeCat('Cat')).toBe(true);
    });

    it('\tTest condition #' + testUtils.getGlobalTestConditionNo() + ' [ Scenario No: ' + getNextTestConditionNo() + ']: Test element comparison', function () {
        expect(commonUtils.sort(44, 12)).toEqual(1);
    });

    it('\tTest condition #' + testUtils.getGlobalTestConditionNo() + ' [ Scenario No: ' + getNextTestConditionNo() + ']: Test Array Sorting', function () {
        const sortedArray = commonUtils.sortArray(testUtils.getSampleArray1());
        expect(sortedArray).toEqual(jasmine.any(Array));
        expect(sortedArray.length).toEqual(3);
        expect(sortedArray[0]).toEqual('Garfield');
        expect(sortedArray[1]).toEqual('Max');
        expect(sortedArray[2]).toEqual('Tom');
    });
});

/**
 * Returns the next module level test condition/scenario no
 * @returns {number}
 */
function getNextTestConditionNo() {
    return testConditionNo++;
}
