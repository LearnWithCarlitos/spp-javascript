// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.
export const WORD_CAR = 'car';
export const WORD_TRUCK = 'truck';
export const WORD_BIKE = 'bike';
export const WORD_STROLLER = 'stroller';
export const WORD_SCOOTER = 'e-scooter';
/**
 * Determines whether or not you need a license to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
    if (kind == WORD_CAR || kind == WORD_TRUCK) {
        return true;
    } else if (
        kind == WORD_BIKE ||
        kind == WORD_STROLLER ||
        kind == WORD_SCOOTER
    ) {
        return false;
    } else {
        console.log("I DON'T KNOW WHAT HAPPENED, PAPU!");
    }
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {
    const MESSAGE = ' is clearly the better choice.';
    if (option1 < option2) {
        return option1 + MESSAGE;
    } else if (option1 > option2) {
        return option2 + MESSAGE;
    } else {
        console.log('I do not know what happened');
    }
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns {number} expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
    if (age < 3) {
        return originalPrice * 0.8;
    } else if (age >= 3 && age <= 10) {
        return originalPrice * 0.7;
    } else if (age > 10) {
        return originalPrice * 0.5;
    } else {
        console.log('I do not know what happened');
    }
}

// TEST HERE
console.log('TASK 1: ' + needsLicense(WORD_STROLLER));
console.log('TASK 2: ' + chooseVehicle('Wuling Hongguang', 'Toyota Corolla'));
console.log('TASK 3: ' + calculateResellPrice(1000, 15));

/*
    - TITLE:

        - Vehicle Purchase

    - REQUIREMENT:

        - 1. Determine if you will need a drivers license.
        - 2. Choose between two potential vehicles to buy.
        - 3. Calculate an estimation for the price of a used vehicle.

    - SOURCE & BIBLIOGRAPHY:

        - https://exercism.org/tracks/javascript/exercises/vehicle-purchase
        
        - https://github.com/exercism/javascript/tree/main/exercises/concept/vehicle-purchase

*/
