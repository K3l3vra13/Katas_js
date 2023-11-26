//! Buscar la palabra más larga Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
//! Puedes usar este array para probar tu función:

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function longStrings(arr) {
    let longString= arr[0];
    for (i = 1; i < arr.length; i++) {
        if (arr[i].length > longString.length) { 
            longString = arr[i];
        }
    }
    return longString;
} 

console.log("El primer string más largo del array es: ", longStrings(avengers));


