// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, heigth) {
  let multiArea = base * heigth;
  let divArea = multiArea / 2;
  return divArea;
}

// Desafio 3
function splitSentence(string) {
  // string.split([separado quando conter : ' '])
  return string.split([' ']);
}

// Desafio 4
function concatName(array) {
  //Array.of para criar array com elementos estabelecidos.
  array = Array.of(array[array.length - 1], array[0]);
  //join() junta os elementos do array para uma string
  return array.join(', ');
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
