//! Usa includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.

const products = ['Camiseta de Pokemon', 
'Pantalón coquinero', 
'Gorra de gansta', 
'Camiseta de Basket', 
'Cinrurón de Orión', 
'AC/DC Camiseta'];

function findProducts(arr, element) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i].includes(element)) {
            console.log(arr[i])
        }
    }
}

findProducts(products, "Camiseta");