// Desafio 1
function compareTrue(comp1, comp2) {
  // seu código aqui
  let resultadoComparacao;
  if ((comp1 === true && comp2 === true)) {
    resultadoComparacao = true;
  } else {
    return false;
  }
  return resultadoComparacao;
}
// Desafio 2
function calcArea(base, height) {
  // seu código aqui

  let calculoArea = (base * height) / 2;

  return calculoArea;
}

// Desafio 3
function splitSentence(sentenca) {
  // seu código aqui
  let divisaoDeSentenca = sentenca.split(" ");
  return divisaoDeSentenca;
}
// Desafio 4
function concatName(nomePessoa) {
  // seu código aqui
  return nomePessoa[nomePessoa.lenght - 1] + "," + nome[0];
}
// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + ties
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
