//! Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

//*pista (typeof)

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
let sumNum = 0;
let sumStr = 0;
let total = 0;
function averageWord(param) {
    for (i = 0; i < param.length; i++) {
      if (typeof(param[i]) === 'string') {
          sumStr += param[i].length;          
      } else {
        sumNum += param[i];
      }
    }
    total = sumStr + sumNum;
    return total;
  }
  console.log("La suma total del los números con la longitud de cada string es: ", averageWord(mixedElements));