// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  let valor;
  if (param1 === true && param2 === true) {
    valor = true;
  } else {
    valor = false;
  }
  return valor;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let areaTriangulo = (base * height) / 2;

  return areaTriangulo;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let splitFrase = frase.split(' ');

  return splitFrase;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let resultado = "";
  resultado += array[array.length -1];
  resultado += ", ";
  resultado += array[0];

  return resultado;
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
