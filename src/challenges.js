// Desafio 1

function compareTrue(a, b) {
if(a === true && b === true){
  return true;
}
else {
  return false;
}
}


// Desafio 2
function calcArea(base,altura) {
  let area = (base*altura)/2 ;
  return area;
}


// Desafio 3
function splitSentence(palavras) {
  let palavra ='';
    let array = [];
    for(let letters of palavras){
        if(letters != ' '){
         palavra += letters;
        }
        else {
            array.push(palavra);
            palavra = '';
        }
        
    }
    array.push(palavra)
    return array;
}


// Desafio 4
function concatName(array) {
  let conca = '';
    let index = 0;

    for(let key in array){
        index = key;
    }
    conca = array[index] + ',' + ' ' + array[0];
    
    return conca;
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
