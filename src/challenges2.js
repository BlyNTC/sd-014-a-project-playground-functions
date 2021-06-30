// Desafio 10
function techList(techs, name) {
var array = [];
let techsOrdem = techs.sort();
  for(let i = 0; i<techs.length; i+=1){
    let obj = {
      tech: techs[i],
      name: name
    }
    array.push(obj);
  }
  if(array.length == 0){
    return 'Vazio!';
  }else{
    return array;
  }
}
// Desafio 11
function generatePhoneNumber(number) {
let continuar = true;
let numerFormat = '';
let count = 1;
  if(number.length != 11){
    return 'Array com tamanho incorreto.';
  }
  else{
    for(let i = 0; i<number.length; i+=1){
      for(let j = i+1; j<number.length;j+=1){
        if(number[i] === number[j]){
          count += 1;
        }
      }
      if((number[i]<0 || number[i]>9) || count >= 3){
        return "não é possível gerar um número de telefone com esses valores";
      }else{
        if(i===0){
          numerFormat += '(' + number[i];
        }
        else if(i>0 && i<2 || i>2 && i<7 || i>7){
          numerFormat += number[i];
        }
        else if(i === 2){
          numerFormat += ') ' + number[i];
        }else if(i === 7){
          numerFormat += '-' + number[i];
        }
        count = 1;
      }
    }
    return numerFormat;
  }
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
