///////////////////////////////////////////////////////////////
// Module Dependencies
///////////////////////////////////////////////////////////////
let _           = require('underscore');
let constants   = require('../utils/constants');

///////////////////////////////////////////////////////////////
// 	Exposed Methods
///////////////////////////////////////////////////////////////
module.exports = {
    /**
     * Checks whether the given record is a gender type of Female
     * @param gender        Gender type
     * @returns {*|boolean} Status
     */
    isGenderFemale: function(gender) {
        return (gender && (gender === constants.gender.FEMALE));
    },

    /**
     * Checks whether the given record is a gender type of Female
     * @param type          Pet type
     * @returns {*|boolean} Status
     */
    isPetTypeCat: function(type) {
        return (type && (type === constants.petType.CAT));
    },

    /**
     * Sorts elements in ascending order by comparing the given attributes
     * @param a Value 1
     * @param b Value 2
     * @returns {number} Result
     */
    sort: function(a, b) {
        if (a < b)
            return -1;
        if (a > b)
            return 1;
        return 0;
    },

    /**
     * Sorts elements in ascending order by comparing the given attributes
     * @param array Array of objects
     * @returns []  Resulted Array
     */
    sortArray: function(array) {
        if (array)
            return array.sort(this.sort);
        else
            return null;
    },

    /**
     * Displays the final output to standard console.
     * @param records Records
     */
    displayElements: function(records) {
        console.log('');
        console.log('Male');
        for (const record of records.male) {
            console.log('\t* ' + record);
        }

        console.log('');
        console.log('Female');
        for (const record of records.female) {
            console.log('\t* ' + record);
        }
    }
};
