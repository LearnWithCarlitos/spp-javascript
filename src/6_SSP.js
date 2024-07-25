// @ts-check

/**
 * Retrieve card from cards array at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number} the card
 */
export function getItem(cards, position) {
    let result = cards[position];
    return result;
}

/**
 * Exchange card with replacementCard at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 * @param {number} replacementCard
 *
 * @returns {number[]} the cards with the change applied
 */
export function setItem(cards, position, replacementCard) {
    // Eliminar y reemplazar el elemento en la posición especificada
    cards.splice(position, 1, replacementCard);
    // Retornar el arreglo modificado
    return cards;
}

/**
 * Insert newCard at the end of the cards array
 *
 * @param {number[]} cards
 * @param {number} newCard
 *
 * @returns {number[]} the cards with the newCard applied
 */
export function insertItemAtTop(cards, newCard) {
    // Agregar el nuevo elemento al final del array
    cards.push(newCard);
    // Retornar el array modificado
    return cards;
}

/**
 * Remove the card at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItem(cards, position) {
    cards.splice(position, 1);
    return cards;
}

/**
 * Remove card from the end of the cards array
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItemFromTop(cards) {
    cards.pop();
    return cards;
}

/**
 * Insert newCard at beginning of the cards array
 *
 * @param {number[]} cards
 * @param {number} newCard
 *
 * @returns {number[]} the cards including the new card
 */
export function insertItemAtBottom(cards, newCard) {
    cards.unshift(newCard);
    return cards;
}

/**
 * Remove card from the beginning of the cards
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItemAtBottom(cards) {
    cards.shift();
    return cards;
}

/**
 * Compare the number of cards with the given stackSize
 *
 * @param {number[]} cards
 * @param {number} stackSize
 *
 * @returns {boolean} true if there are exactly stackSize number of cards, false otherwise
 */
export function checkSizeOfStack(cards, stackSize) {
    if (cards.length == stackSize) {
        return true;
    } else if (cards.length != stackSize) {
        return false;
    } else {
        console.error();
    }
}

// TEST HERE
console.log('TASK 1: ' + getItem([1, 2, 3, 4, 5], 1));
console.log('TASK 2: ' + setItem([1, 2, 3, 4, 5], 0, 9));
console.log('TASK 3: ' + insertItemAtTop([1, 2, 3, 4, 5], 1));
console.log('TASK 4: ' + removeItem([1, 2, 3, 4, 5], 1));
console.log('TASK 5: ' + removeItemFromTop([1, 2, 3, 4, 5]));
console.log('TASK 6: ' + insertItemAtBottom([1, 2, 3, 4, 5], 1));
console.log('TASK 7: ' + removeItemAtBottom([1, 2, 3, 4, 5]));
console.log('TASK 8: ' + checkSizeOfStack([1, 2, 3, 4, 5], 5));

/*
  - TITLE:

      - Elyses Enchantments

  - REQUIREMENT:

      - 1. Retrieve a card from a stack
      - 2. Exchange a card in the stack
      - 3. Insert a card at the top of the stack
      - 4. Remove a card from the stack
      - 5. Remove the top card from the stack
      - 6. Insert a card at the bottom of the stack
      - 7. Remove a card from the bottom of the stack
      - 8. Check the size of the stack

  - SOURCE & BIBLIOGRAPHY:

      - https://exercism.org/tracks/javascript/exercises/elyses-enchantments/edit

      - https://github.com/exercism/javascript/tree/main/exercises/concept/elyses-enchantments

      - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

      - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop

      - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift

      - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift

      - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

      - Recommend This Commands

          { push() , pop() , shift() , unshift() , splice() }

*/
