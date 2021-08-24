/* eslint-disable complexity */
/* eslint-disable comma-dangle */
/* eslint-disable key-spacing */
/* eslint-disable editorconfig/editorconfig */
/* eslint-disable quote-props */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable no-undef */
// Desafio 1
function compareTrue(arg1, arg2) {
  if (arg1 && arg2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let separator = ' ';
  let arrayOfStrings = string.split(separator);

  return arrayOfStrings;
}

// Desafio 4
function concatName(array) {
  let nameConcat = `${array[array.length - 1]}, ${array[0]}`;
  return nameConcat;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 + ties);
}

const counter = (array, highest) => {
  let count = 0;
  for (let value of array) {
    if (value === highest) {
      count += 1;
    }
  }

  return count;
};

// Desafio 6
function highestCount(array) {
  let highest = array[0];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] >= highest) {
      highest = array[i];
    }
  }
  return counter(array, highest);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1Mouse = Math.abs(mouse - cat1);
  let distanceCat2Mouse = Math.abs(mouse - cat2);
  if (distanceCat1Mouse > distanceCat2Mouse) return 'cat2';
  if (distanceCat2Mouse > distanceCat1Mouse) return 'cat1';
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  const arrFB = array.reduce((arrayFB, value) => {
    if (value % 3 === 0 && value % 5 === 0) {
      arrayFB.push('fizzBuzz');
    } else if (value % 3 === 0) {
      arrayFB.push('fizz');
    } else if (value % 5 === 0) {
      arrayFB.push('buzz');
    } else {
      arrayFB.push('bug!');
    }
    return arrayFB;
  }, []);

  return arrFB;
}

// Desafio 9
function encode(string) {
  let vogais = ['', 'a', 'e', 'i', 'o', 'u'];
  for (let letter of string) {
    for (let vogal in vogais) {
      if (vogais[vogal] === letter) {
        string = string.replace(letter, vogal);
      }
    }
  }
  return string;
}
function decode(string) {
  let numbers = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (let letter of string) {
    for (let number in numbers) {
      if (number === letter) {
        string = string.replace(letter, numbers[number]);
      }
    }
  }

  return string;
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
