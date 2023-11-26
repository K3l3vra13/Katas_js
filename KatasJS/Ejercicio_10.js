//! Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];
let sum = 0;
function average(param) {
  for (i = 0; i < param.length; i++) {
    sum += param[i];    
  }
  let aver = sum / param.length;
  return aver;
}

console.log("La media es: ", average(numbers));