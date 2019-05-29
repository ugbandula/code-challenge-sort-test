/**
 * Created by Bandula Gamage on 28/05/2019.
 */
const frisby        = require('frisby');
const testUtils     = require('../shared/test-utils');
const objectSorter  = require('../../app/controllers/object-sorter-service');

let testConditionNo = 0;
let sampleData      = null;

/**
 * Evaluates the accuracy of data processing definitions
 */
describe('TEST DATA READ AND PROCESSING ACCURACY', function () {

    it('\tTest condition #' + testUtils.getGlobalTestConditionNo() + ' [ Scenario No: ' + getNextTestConditionNo() + ']: Read Sample Data', function () {
        /**
         * Reads all available sample data
         */
        return frisby.get('http://agl-developer-test.azurewebsites.net/people.json')
            .then(function (response) {
                expect(response.json).not.toBe(null); //Check object validity
            });
    });

});

/**
 * Returns the next module level test condition/scenario no
 * @returns {number}
 */
function getNextTestConditionNo() {
    return testConditionNo++;
}
