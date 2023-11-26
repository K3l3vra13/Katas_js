//! Usa un bucle para crear 3 arrays de películas filtrados por categorías. Película pequeña, menos de 100 minutos, película mediana, mas de 100 minutos y menos de 200 y película grande, mas de 200 minutos. Imprime cada array por consola.

const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 }
  ];

  let smallMovie = [];
  let mediumMovie = [];
  let longMovie = [];
// Sé que el enunciado pone películas de mas de 200 minutos y menos de 100 minutos pero he puesto que las películas medianas incluyan tanto la duración de 200 minutos como las de 100 minutos ya que en el caso de tener una película de esas duraciones no aparecería clasificada.

  for (i = 0; i < movies.length; i++) {
    if (movies[i].durationInMinutes > 200) {
        longMovie.push(movies[i]);
    } if (movies[i].durationInMinutes <= 200 && movies[i].durationInMinutes >= 100) {
        mediumMovie.push(movies[i]);
      if (movies[i].durationInMinutes < 100) {
        smallMovie.push(movies[i]);
      } else {
        
      }          
    } else { 
               
    }
  }
  console.log("Películas largas:", JSON.stringify(longMovie, null, 2));
  console.log("Películas medianas:", JSON.stringify(mediumMovie, null, 2));
  console.log("Películas cortas:", JSON.stringify(smallMovie, null, 2));