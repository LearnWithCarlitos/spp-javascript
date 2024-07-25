// CODE HERE

// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.

// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./freelancer-rates.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Get those rates calculated!

export const HORA_DIA = 24;
export const HORA_LABORAL = 8;
export const DAY_MONTH = 22;

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
    let res = ratePerHour * HORA_LABORAL;
    return res;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
    let res = Math.floor(budget / (ratePerHour * 8));
    return res;
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    let val_dayrate = dayRate(ratePerHour); // Money per day
    let fullMonths = Math.floor(numDays / DAY_MONTH); // Month in integer
    let remainingDays = numDays % DAY_MONTH; // Remainder month in days
    /*
        - 1 es igual a 100%
        - (1 - discount) = total valor con descuento
    */
    let fullMonthRate = val_dayrate * DAY_MONTH; // total:Money per month
    let discountedFullMonthRate = fullMonthRate * (1 - discount); // total value money month with discount
    let totalFullMonthsCost = fullMonths * discountedFullMonthRate; // total value per all month
    let remainingDaysCost = remainingDays * val_dayrate; // value days without discount
    let totalCost = Math.ceil(totalFullMonthsCost + remainingDaysCost); // month + days
    return totalCost;
}

/*
    - TITLE:

        - Freelancer Rates

    - REQUIREMENT:

        - 1. Calculate the day rate given an hourly rate.
        - 2. Calculate the number of workdays given a fixed budget.
        - 3. Calculate the discounted rate for large projects.

    - SOURCE & BIBLIOGRAPHY:

        - https://github.com/exercism/javascript/tree/main/exercises/concept/freelancer-rates
        
        - https://exercism.org/tracks/javascript/exercises/freelancer-rates

*/
