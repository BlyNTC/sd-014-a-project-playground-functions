// Desafio 1
function compareTrue(num1, num2) {

  if (num1 && num2)
    return true;
  else 
    return false;
}

// Desafio 2
function calcArea(base, heigt) {
  let area = 2;

  return base * heigt / 2;
  
}

calcArea();

// Desafio 3
function splitSentence() {
  let frase = 'go Trybe!';
  let animacao = 'vamo que vamo!';
  let voar = 'foguete';

  return frase.split(" ");
  return animacao.split(" ");
  return voar.split(" ");
}

splitSentence();

// Desafio 4
function concatName() {
  // seu código aqui
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
