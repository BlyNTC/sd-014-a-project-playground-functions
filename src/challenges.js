// Desafio 1
function compareTrue(valor1, valor2) {
  return valor1 && valor2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(string) {
  return `${string[string.length - 1]}, ${string[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(valores) {
  const sortValores = valores.sort((a, b) => a - b);
  const maxNumber = sortValores[sortValores.length - 1];
  let repeticao = 0;
  for (let number of sortValores) {
    if (number === maxNumber) {
      repeticao += 1;
    }
  }
  return repeticao;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaMouseCat1 = Math.abs(mouse - cat1);
  let distanciaMouseCat2 = Math.abs(mouse - cat2);
  let pegouRato;
  if (distanciaMouseCat1 < distanciaMouseCat2) {
    pegouRato = 'cat1';
  } else if (distanciaMouseCat1 > distanciaMouseCat2) {
    pegouRato = 'cat2';
  } else {
    pegouRato = 'os gatos trombam e o rato foge';
  }
  return pegouRato;
}

// Desafio 8
function fizzBuzz(numeros) {
  let composicao = [];
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] % 3 === 0 && numeros[index] % 5 === 0) {
      composicao.push('fizzBuzz');
    } else if (numeros[index] % 3 === 0) {
      composicao.push('fizz');
    } else if (numeros[index] % 5 === 0) {
      composicao.push('buzz');
    } else {
      composicao.push('bug!');
    }
  }
  return composicao;
}

// Desafio 9
function encode(string) {
  let codificado = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === 'a'){
      codificado += 1;
    } else if (string[index] === 'e') {
      codificado += 2;
    } else if (string[index] === 'i') {
      codificado += 3;
    } else if (string[index] === 'o') {
      codificado += 4;
    } else if (string[index] === 'u') {
      codificado += 5;
    } else {
      codificado += string[index];
    }
  }
  return codificado;
}
function decode(string) {
  let descodificado = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === '1') {
      descodificado += 'a';
    } else if (string[index] === '2') {
      descodificado += 'e';
    } else if (string[index] === '3') {
      descodificado += 'i';
    } else if (string[index] === '4') {
      descodificado += 'o';
    } else if (string[index] === '5') {
      descodificado += 'u';
    } else {
      descodificado += string[index];
    }
  }
  return descodificado;
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
