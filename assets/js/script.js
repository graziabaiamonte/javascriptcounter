const number = document.createElement('span');
number.innerHTML = '0';
let buttonPlus = document.createElement('button');
buttonPlus.innerHTML = '+';
const buttonMinus = document.createElement('button');
buttonMinus.innerHTML = '-';
const buttonReset = document.createElement('button');
buttonReset.innerHTML = 'reset';

buttonMinus.classList.add('button');
buttonPlus.classList.add('button');
buttonReset.classList.add('button');
buttonReset.classList.add('reset');
number.classList.add('number');

const boxGenerale = document.getElementById('box-generale');

const boxSfondo = document.createElement('div');
boxSfondo.classList.add('boxSfondo');
boxGenerale.appendChild(boxSfondo);

const boxCounter = document.createElement('div');
boxCounter.classList.add('boxCounter');
boxSfondo.appendChild(boxCounter);

const titolo = document.createElement('h1');
titolo.innerHTML = 'JAVASCRIPT COUNTER';
boxCounter.appendChild(titolo);

const counter = document.createElement('div');
counter.classList.add('counter');
boxCounter.appendChild(counter);

counter.appendChild(buttonMinus);
counter.appendChild(number);
counter.appendChild(buttonPlus);

boxCounter.appendChild(buttonReset);

const boxTesto = document.createElement('div');
boxSfondo.appendChild(boxTesto);
boxTesto.classList.add('boxTesto')
const testoSize = document.createElement('p');
boxTesto.appendChild(testoSize);
testoSize.innerHTML = 'TEXT SIXE';

const testoDimensione = document.createElement('p');
boxTesto.appendChild(testoDimensione);
testoDimensione.innerHTML = '20 px';



let pElement = document.querySelector('p')




buttonPlus.addEventListener('click', add);

buttonPlus.addEventListener('click', increaseFontSize);
buttonMinus.addEventListener('click',subtract);


buttonMinus.addEventListener('click', decreaseFontSize);
buttonReset.addEventListener('click', reset);

let value = 0;


function add() {
    if (value< 100){
        value++;
        number.innerHTML = value;
    }
}


function increaseFontSize(){
    if (value < 100){
    let paragrafo = document.querySelector('p');
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



const footer = document.createElement('footer');
footer.classList.add('footer');
boxGenerale.appendChild(footer);
let testoCopyright = document.createElement('p');
testoCopyright.innerHTML = 'Copyright &#169; 2023 by Grazia Baiamonte | All Rights Reserved'
footer.appendChild(testoCopyright);  
let pProject = document.createElement('p');
footer.appendChild(pProject);
pProject.innerHTML = 'Start2Impact - Project Basic Javascript'