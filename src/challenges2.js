// Desafio 10
function techList(techs, name) {
  let result = [];
  let ordem = techs.sort();

  if (techs == 0){
    result = 'Vazio!';
  }
  else {
    for (let i of ordem) {
      result.push({tech: i, 'name': name});
    }
  }
  return result;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
