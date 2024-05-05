/* Cassia Nebel's
 * Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

/**
 * Listens for a button click to start a new game
 */
document.getElementById('btn__reset').addEventListener('click', () => {
  game = new Game();
  game.startGame();
});


/**
 * Listens for on-screen letter button clicks
 */
const buttons = document.querySelectorAll('button.key');
for(let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', (e) => {
    game.handleInteraction(e.target);
  });
}


/**
 * Give on-screen keys ids, so they can be handled by physical keyboard clicks
 */
let screenKeys = document.querySelectorAll('.key');
for(let i = 0; i < screenKeys.length; i++){
  screenKeys[i].id = screenKeys[i].textContent;
}
/**
 * Listens for physical keyboard button clicks
 */
document.addEventListener('keyup', (e) => {
  let button = document.getElementById(e.key);
  game.handleInteraction(button);
});


/**
 * Adapted from https://animate.style/
 * Helper function to add animation classes to elements
 * and then automatically remove the classes after the animation ends.
 * 
 * @param {*} node - The html element to animate
 * @param {*} animation - The name of the animation
 * @param {*} prefix - The prefix for the animation
 */
const animateCSS = (node, animation, prefix = 'animate__') =>
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;

    node.classList.add(`${prefix}animated`, animationName);
    
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });