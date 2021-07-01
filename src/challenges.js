// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
  let area = (base * altura) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let array = [''];
  let cont = 0;

  for (let index = 0; index < string.length; index += 1) {
    let indicaEspaco = 0;
    if (string[index] === '') {
      cont += 1;
      indicaEspaco += 1;
    }
    if (indicaEspaco === 0) {
      array[cont] += string[index];
    } else {
      array[cont] = '';
    }
  }
  return array;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let string = '';
  let tam = array.length;
  string = array[tam - 1];
  string += ', ' + array[0];

  console.log(string);
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let soma = 0;
  soma = 3 * wins + 1 * ties;
  return soma;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let contNumero = 0;

  for (let key in array) {
    let max = Math.max.apply(null, array);

    if (max === array[key]) {
      contNumero += 1;
    }
  }
  return contNumero;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  // cat1 é a distancia em unidades do gato1 para o rato
  let distCat1 = Math.abs(cat1);
  let distCat2 = Math.abs(cat2);
  let distMouse = Math.abs(mouse);

  if (Math.abs(distMouse - distCat1) > Math.abs(distMouse - distCat2)) {
    return 'cat2';
  } else if (Math.abs(distMouse - distCat1) < Math.abs(distMouse - distCat2)) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let lista = [''];

  for (let key in array) {
    if (array[key] % 5 === 0 && array[key] % 3 === 0) {
      lista[key] = 'fizzBuzz';
    } else if (array[key] % 5 === 0) {
      lista[key] = 'buzz';
    } else if (array[key] % 3 === 0) {
      lista[key] = 'fizz';
    } else {
      lista[key] = 'bug!';
    }
  }
  return lista;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let frase = '';
  for (let value of string) {
    if (value === 'a') {
      frase += '1';
    } else if (value === 'e') {
      frase += '2';
    } else if (value === 'i') {
      frase += '3';
    } else if (value === 'o') {
      frase += '4';
    } else if (value === 'u') {
      frase += '5';
    } else {
      frase += value;
    }
  }
  return frase;
}

function decode(frase2) {
  // seu código aqui
  let frase = '';
  for (let value of frase2) {
    if (value === '1') {
      frase += 'a';
    } else if (value === '2') {
      frase += 'e';
    } else if (value === '3') {
      frase += 'i';
    } else if (value === '4') {
      frase += 'o';
    } else if (value === '5') {
      frase += 'u';
    } else {
      frase += value;
    }
  }
  return frase;
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
