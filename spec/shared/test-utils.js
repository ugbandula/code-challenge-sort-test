/**
 * Created by Bandula Gamage on 28/05/2019.
 */

let globalTestConditionNo = 1;

/**
 * Returns the next test module no.
 * @returns Test condition no
 */
exports.getGlobalTestConditionNo = function() {
    return globalTestConditionNo++;
};

exports.getSampleArray1 = function() {
    return ['Tom', 'Garfield', 'Max'];
};

exports.getSampleArray2 = function() {
    return ['Simba', 'Garfield'];
};
