//! Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos y mostrar por consola la media de ventas.

const products = [
    { name: "Funko Dr. Strange", sellCount: 10 },
    { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
    { name: "Sable laser FX", sellCount: 23 },
    { name: "Varita de Voldemort", sellCount: 6 },
  ];
  
  let totalSellCount = 0;
  let averageSellCount = 0;

  for (i = 0; i < products.length; i++) {
  totalSellCount += products[i].sellCount;
};  
  averageSellCount = totalSellCount / products.length;

  console.log(`Con un total de ventas de ${totalSellCount} artículos, nuestra media de ventas ha sido de ${averageSellCount}. ¡Tenemos que comprar más ${products[1].name}!`);