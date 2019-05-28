///////////////////////////////////////////////////////////////
// 	Exposed Methods
///////////////////////////////////////////////////////////////
module.exports = {
    /**
     * Checks whether the given record is a gender type of Male
     * @param record        Record
     * @returns {*|boolean} Status
     *
     * Format of the record
     * {
     *      "name": "Bob",
     *      "gender": "Male",
     *      "age": 23,
     *      "pets": [
     *          {
     *              "name": "Garfield",
     *              "type": "Cat"
     *          },
     *          {
     *              "name": "Fido",
     *              "type": "Dog"
     *          }
     *      ]
     *  }
     */
    isGenderMaleOwner: function(record) {
        return (record && (record.gender === 'Male'));
    },

    /**
     * Checks whether the given record is a gender type of Female
     * @param record        Record
     * @returns {*|boolean} Status
     */
    isGenderFemaleOwner: function(record) {
        return (record && (record.gender === 'Female'));
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
