// Funções auxiliares

function fizzBuzzNumberCheck(number) {
  return 1 * (number % 3 === 0) + 2 * (number % 5 === 0);
}

// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  return param1 && param2;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let word = '';
  let splitedSentence = [];

  for (let str of string) {
    if (str !== ' ') {
      word += str;
    } else if (word.length > 0) {
      splitedSentence.push(word);
      word = '';
    }
  }
  if (word.length > 0) {
    splitedSentence.push(word);
  }
  return splitedSentence;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  const count = {};
  let max = array[0];

  for (let num of array) {
    count[num] = num in count ? count[num] + 1 : 1;
    if (num > max) { max = num; }
  }
  return count[max];
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  const catchMouseResult = { '-1': 'cat1', 0: 'os gatos trombam e o rato foge', 1: 'cat2' };
  let ca1ToMouse = Math.abs(mouse - cat1);
  let cat2ToMouse = Math.abs(mouse - cat2);
  let result = Math.sign(ca1ToMouse - cat2ToMouse);

  return catchMouseResult[result];
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  const fizzBuzzBug = { 0: 'bug!', 1: 'fizz', 2: 'buzz', 3: 'fizzBuzz' };
  let fizzBuzzArray = [];

  for (let num of array) {
    fizzBuzzArray.push(fizzBuzzBug[fizzBuzzNumberCheck(num)]);
  }
  return fizzBuzzArray;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  const vowelToNumber = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  let encodedString = '';
  let aux;

  for (let str of string) {
    aux = str in vowelToNumber ? vowelToNumber[str] : str;
    encodedString += aux;
  }
  return encodedString;
}

function decode(string) {
  // seu código aqui
  const numberToVowel = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let decodedString = '';
  let aux;

  for (let str of string) {
    aux = str in numberToVowel ? numberToVowel[str] : str;
    decodedString += aux;
  }
  return decodedString;
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
