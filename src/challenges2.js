// Desafio 10
function techList(array,name) {
  if(array.length === 0){
    return 'Vazio!';
  }else{
  array = array.sort();
  let object = {};
  let arrayResp = [];
  for (let index in array){
    object.tech = array[index];
    object.name = name;
    arrayResp.push(object);
    object = {};
  }
  return arrayResp;
}
}
// }
techList([],"lucas");

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
