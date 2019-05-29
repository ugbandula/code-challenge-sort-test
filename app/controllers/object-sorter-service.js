///////////////////////////////////////////////////////////////
// Module Dependencies
///////////////////////////////////////////////////////////////
let request     = require('request');
let commonUtils = require('../utils/common-utils');

///////////////////////////////////////////////////////////////
// 	Module Variables
///////////////////////////////////////////////////////////////
/**
 * Stores the filtered, sorted information
 */
let filteredObjects = {
    male: [],
    female: []
};

///////////////////////////////////////////////////////////////
// 	Exposed Methods
///////////////////////////////////////////////////////////////
module.exports = {

    /**
     * Invokes the data read and the processes the received information.
     */
    invokeObjectSorter: function() {
		request(process.env.DATA_CONSUME_URL, function (error, response, body) {
            /**
             * If error occurred, exit from the application
             */
			if (error)
				return console.log(error);

            /**
             * Data read successful
             */
			if (!error && response.statusCode === 200) {
				// console.log('Data reading successful!');
                processObjects(JSON.parse(body));
			} else {
				console.log('Error occurred!');
				console.log(error);
			}
		});
	}
};

/**
 * Processes the received data array and generates the required output.
 * @param data  Received data from the web service
 */
function processObjects(data) {
	if (data) {
        /**
         * Separate records based on the gender
         */
        data.forEach((record, index) => {
            processPetRecordsForEachPerson(record.gender, record);
        });

        /**
         * Sorts the final data collections
         */
        filteredObjects.male    = commonUtils.sortArray(filteredObjects.male);
        filteredObjects.female  = commonUtils.sortArray(filteredObjects.female);

        console.log('Generated Output');
        console.log('________________');
        console.log('');

        commonUtils.displayElements(filteredObjects);
	}
}

/**
 * Processes pets arrays under each person
 * @param gender    Gender type
 * @param record    Pet records
 */
function processPetRecordsForEachPerson(gender, record) {
    if (!record.pets)
        return;

    record.pets.forEach((pet, index) => {
        if (commonUtils.isPetTypeCat(pet.type)) {
            if (commonUtils.isGenderFemale(gender)) {
                filteredObjects.female.push(pet.name);
            } else {
                filteredObjects.male.push(pet.name);
            }
        }
    });

}
