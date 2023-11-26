//! Completa la función que tomando dos números como argumento devuelva el más alto.

// Lo que piden se puede hacer solo con un if y un else pero quería mejorar la función por si los dos números eran iguales.  

function sum(numberOne , numberTwo) {
    if (numberOne < numberTwo) {       
        console.log(`El numero más alto es: ${numberTwo}`);
        return numberTwo;
    } if (numberOne > numberTwo) {     
        console.log(`El numero más alto es: ${numberOne}`)
        return numberOne;
    } else {
        console.log("Los número son iguales!!");
    } 
   
  }

  sum(10, 5);
  sum(3, 8);
  sum(45, 45);