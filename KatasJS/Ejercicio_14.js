//! Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función:

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  function repeatCounter(param) {
    const wordsRep = {};     
    for (i = 0; i < param.length; i++) {
        if (wordsRep[param[i]]) {
           wordsRep[param[i]]++;
        } else {
          wordsRep[param[i]] = 1;
        }
    }
    return wordsRep;
  }

  console.log(repeatCounter(counterWords));

