const number = document.getElementById('number');
let buttonPlus = document.getElementById('plus');
const buttonMinus = document.getElementById('minus');
const buttonReset = document.getElementById('reset');
const title = document.querySelector('h1');
let pElement = document.querySelector('p')
let testoDimensione = document.getElementById('testoDimensione');

buttonPlus.addEventListener('click', add);

buttonPlus.addEventListener('click', increaseFontSize);
buttonMinus.addEventListener('click',subtract)


buttonMinus.addEventListener('click', decreaseFontSize);
buttonReset.addEventListener('click', reset);

let value = 0;

/**
 * The add function increments the value variable and updates the number element with the new value.
 */

function add() {
    if (value< 100){
        value++;
        number.innerHTML = value;
    }
}


function increaseFontSize(){
    if (value < 100){
    let paragrafo = document.querySelector('p')
    let currentSize = parseInt(window.getComputedStyle(paragrafo).fontSize);
    let newSize = currentSize+1;
    paragrafo.style.fontSize = newSize + 'px'
    testoDimensione.innerHTML = `${newSize} px`

    let randomColor = Math.floor(Math.random()*16777216).toString(16);
    pElement.style.color = `#${randomColor}`; 
    }
  }


function subtract() {
    value--;
    number.innerHTML = value;
    
}
/**
 * The function decreases the font size of a paragraph element by 1 pixel and changes its color to a
 * random value.
 */

function decreaseFontSize(){
   let paragrafo = document.querySelector('p')
   let currentSize = parseInt(window.getComputedStyle(paragrafo).fontSize);
   let newSize = currentSize-1;
   paragrafo.style.fontSize = newSize + 'px'
   testoDimensione.innerHTML = `${newSize} px`

   let randomColor = Math.floor(Math.random()*16777216).toString(16);
   pElement.style.color = `#${randomColor}`;
    
}

function reset(){
    value = 0;
    number.innerHTML = value;
    pElement.style.color = 'white';
    pElement.style.fontSize = '20px'
    testoDimensione.innerHTML = window.getComputedStyle(testoDimensione).fontSize;
}
