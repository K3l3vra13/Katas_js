//! Probando For...in: Usa un for...in para imprimir por consola los datos del alienígena.. Puedes usar este objeto:

const alien = {
    name: 'Wormuck',
    race: 'Kukuxumuxu',
    planet: 'Eden',
    weight: '259kg'
}
console.log("Alien:")
for (const key in alien) {
    console.log(`${key}: ${alien[key]}`);
}    
    