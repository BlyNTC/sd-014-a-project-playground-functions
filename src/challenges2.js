// Desafio 10
function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!';
  }

  if (array.length === 5) {
    let technologies = [];
    let sortedArray = array.sort();
    let user = name;
    // Próximas linhas inspiradas em https://stackoverflow.com/questions/2383484/how-to-create-a-dynamic-object-in-a-loop
    for (let i = 0; i < array.length; i += 1) {
      technologies[i] = {
        tech: sortedArray[i],
        name: user,
      };
    }
    return technologies;
  }
}

// console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < array.length; i += 1) {
    let count = 0;
    for (let j = 0; j < array.length; j += 1) {
      if (array[i] === array[j]) {
        count += 1;
      }
    }
    if (array[i] < 0 || array[i] > 9 || count >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let number = '';
  for (let item of array) {
    number += item;
  }
  // Ideia retirada de https://stackoverflow.com/questions/4313841/insert-a-string-at-a-specific-index
  return `(${number.slice(0, 2)}) ${number.slice(2, 7)}-${number.slice(7)}`;
}

// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) && (lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineA - lineB))) {
    return true;
  }
  return false;
}

// console.log(triangleCheck(10, 14, 8));

// Desafio 13
function hydrate(string) {
  let aguas = 0;
  for (let i = 0; i < string.length; i += 1) {
    if (!Number.isNaN(parseInt(string[i], 10))) {
      aguas += parseInt(string[i], 10);
    }
  }
  if (aguas === 1) {
    return `${aguas} copo de água`;
  }
  return `${aguas} copos de água`;
}

// console.log(hydrate("1 cerveja"));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
