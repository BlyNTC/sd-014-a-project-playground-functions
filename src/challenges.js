// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height)/2;
  // seu código aqui
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}
//console.log(splitSentence('vamos que vamos'));

// Desafio 4
function concatName(array) {
  let ultimoItem = array[array.length-1];
  let primeiroItem = array [0];
  
  return ultimoItem + ', ' + primeiroItem;
  
  // seu código aqui
}
//console.log(concatName(['lucas', 'cassio', 'jose']));

// Desafio 5
function footballPoints(wins, ties) {
  let pontos;
  
  pontos= wins*3 +ties*1;
  return pontos;
}
//console.log(footballPoints(1, 2))

// Desafio 6
function highestCount(array) {
  // seu código aqui

  let repete= 0;
  let maiorNumero = array[0];

  for(let numero = 0; numero < array.length; numero +=1){
    if(maiorNumero < array[numero]){
      maiorNumero = array[numero];
    }
  }
  for(let numero = 0; numero < array.length; numero +=1){
    if(maiorNumero === array[numero]){
      repete += 1;
    }  
  }  
  return repete;
}
///console.log(highestCount([0,0,0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distancia1;
  let distancia2;
  distancia1 = Math.abs(mouse - cat1);
  distancia2 = Math.abs(mouse - cat2);
  if (distancia2 > distancia1){
    return "cat1";
  }else if (distancia2 < distancia1){
    return "cat2";
  }else if (distancia1 === distancia2)
  return "os gatos trombam e o rato foge";
}
console.log(catAndMouse(0, 3, 2));

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
