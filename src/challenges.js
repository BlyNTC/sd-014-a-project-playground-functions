// Desafio 1
function compareTrue(pcLigado, abriuGame) {  
  
  if ( pcLigado == true && abriuGame == true ) { 

    return true;    
    
  } else {  

    return false;
  }    
}

// Desafio 2
function calcArea(base,height) {
  
  const result = (base * height) / 2;

  return result; 
}

// Desafio 3
function splitSentence(frase) {

  let splitado = frase.split(" ");
  return splitado
}
//console.log(splitSentence("go trybe!"));
// FONTE: https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254 


// Desafio 4
function concatName(arr) { 

  return arr[arr.length -1 ].concat(', ').concat(arr[0]);  
}


// Desafio 5
function footballPoints(wins, ties) {
  wins = (wins * 3) + ties
  return wins
}

// Desafio 6
function highestCount(arr) {
  
  arr = arr.sort(function (a, b) { return a - b; });

  let highValue = arr[arr.length - 1];

  let count = 0;

  for (let number of arr) {

    if (number === highValue) {

      count += 1;
    }
  }
  return count;

  // source: https://github.com/tryber/sd-014-a-project-playground-functions/commit/cdd88e5f455c7cf45c28ea4734d638767d4bad1c#

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
