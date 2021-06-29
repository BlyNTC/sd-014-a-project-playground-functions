// Desafio 10
function techList(arr, name) {
  let studies = arr.sort();
  let newArr = [];

  if (studies.length === 0){
    return 'Vazio!';
  } else {
    studies.forEach(el => {
      newArr.push({
        tech: el, 
        name: name
      });
    });
  
    return newArr;
  }
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((lineA + lineB) > lineC) {
    if ((lineA + lineC) > lineB) {
      if ((lineC + lineB) > lineA) return true
    }
  }
  return false
}

// Desafio 13
function hydrate(s) {
  let num = s.match(/\d+/g) //Busque por todos os digitos (\d+) e os agrupe (g)
  let sum = 0;
  
  num.forEach(el => sum += Number(el))

  if (num === 1) return sum + " copo de água"
  return sum + " copos de água"
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
