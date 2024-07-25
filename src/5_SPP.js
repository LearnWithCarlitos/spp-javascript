// CODE HERE
// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.
//
// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./door-policy.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Good luck with that door policy!

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the front door.
 *
 * @param {string} line
 * @returns {string}
 */
export function frontDoorResponse(line) {
    let res;
    res = line[0];
    return res;
}

/**
 * Format the password for the front-door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the front door password
 */
export function frontDoorPassword(word) {
    // I indicate the place of separation (in the first movement)
    let position = 1;
    // Separate and store the parts
    let part1 = word.slice(0, position);
    let part2 = word.slice(position);
    // indicates whether it is uppercase or lowercase and add the words
    let result = part1.toUpperCase() + part2.toLowerCase();
    // print result
    return result;
}

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the back door.
 *
 * @param {string} line
 * @returns {string}
 */
export function backDoorResponse(line) {
    // eliminar los espacios en blanco
    let blanksLine = line.trim();
    // determinar el tamaño del arreglo
    let blanksLineSize = blanksLine.length;
    // extraigo la ultima letra de la linea
    let lastLetterWord = blanksLine[blanksLineSize - 1];
    // return letter
    return lastLetterWord;
}

/**
 * Format the password for the back door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the back door password
 */
export function backDoorPassword(word) {
    let please = ', please';
    // I indicate the place of separation (in the first movement)
    let position = 1;
    // Separate and store the parts
    let part1 = word.slice(0, position);
    let part2 = word.slice(position);
    // indicates whether it is uppercase or lowercase and add the words
    let wordComplet = part1.toUpperCase() + part2.toLowerCase();
    // add the words
    let result = wordComplet + please;
    // return
    return result;
}

/*
  - TITLE:

      - Poetry Club Door Policy

  - REQUIREMENT:

      - 1. Get the first letter of a sentence.
      - 2. Capitalize a word.
      - 3. Get the last letter of a sentence
      - 4. Be polite

  - SOURCE & BIBLIOGRAPHY:

      - https://exercism.org/tracks/javascript/exercises/poetry-club-door-policy

      - https://github.com/exercism/javascript/tree/main/exercises/concept/poetry-club-door-policy

      - Funcione y coamndos sujeridas:

          { toUpperCase , toLowerCase , trim , includes , startsWithy , endsWith , slice }

*/
