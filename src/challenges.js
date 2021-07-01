// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a == true && b == true){
    result = true;
  }
  else{
    result = false;
  }
return result;
}
// Desafio 2
function calcArea(height, base) {
  // seu código aqui
  let area = (height * base) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let separada = frase.split(' ');
  return separada;
}


// Desafio 4
function concatName(array=[]) {
  // seu código aqui
  let primeiro = (array[0]);
  let ultimo = array[array.length - 1];
  let result = ultimo + ', ' + primeiro;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontos = (wins * 3) + (ties * 1);
  return pontos;
}

// Desafio 6
function highestCount(array=[]) {
  // seu código aqui
  let maior = [];
  let indiceMaior = 0;
  let numMaior = Math.max.apply(null, array);
  for (let i = 0; i < array.length; i += 1){
    if (array[i] == numMaior){
      indiceMaior += array[i];
      maior.push(indiceMaior);
    }
  }
let result = maior.length;
return result;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if ( Math.abs((cat1 - mouse)) < Math.abs((cat2 - mouse))){
    return 'cat1';
  }
  else if ( Math.abs((cat2 - mouse)) < Math.abs((cat1 - mouse))){
    return 'cat2';
  }
  else{
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array=[]) {
  // seu código aqui
  let result = [];
  for (let i = 0; i <= array.length; i += 1){
    if (array[i] % 5 == 0 && array[i] % 3 == 0){
      array[i] = 'fizzBuzz';
      result.push(array[i]);
    }
    else if (array[i] % 3 == 0){
      array[i] = 'fizz';
      result.push(array[i]);
    }
    
    else if (array[i] % 5 == 0){
      array[i] = 'buzz';
      result.push(array[i]);
    }
    else{
      result.push('bug!');

    }
  }
  result.pop();
  return result;
}


// Desafio 9
function encode(frase) {
  // seu código aqui
  let codigo = frase.replace(/a/g, 1).replace(/e/g, 2).replace(/i/g, 3).replace(/o/g, 4).replace(/u/g, 5);
  return codigo;
}
function decode(frase) {
  // seu código aqui
  let deCodigo = frase.replace(/1/g, 'a').replace(/2/g, 'e').replace(/3/g, 'i').replace(/4/g, 'o').replace(/5/g, 'u');
  return deCodigo;
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
