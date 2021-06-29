// Desafio 10
function techList(arr, name) {
  let studies = arr.sort()
  let newArr = []

  if(studies.length == 0){
    return 'Vazio!'
  } else {
    studies.forEach(el => {
      newArr.push({
        tech: el, 
        name: name
      })
    });
  
    return newArr
  }
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
