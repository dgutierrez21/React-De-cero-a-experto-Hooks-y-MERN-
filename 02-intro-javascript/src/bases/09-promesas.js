import { getHeroeById } from "./bases/08-Import-export-y-funciones-comunes-de-arreglos";

console.log("Hola Nundo");

// promesas

// resolver se ejecuta cuando la promesa es exitosa

// rechazar se ejecuta cuando la promesa falla o algo no se pudo cumplir

// const promesa = new Promise((resolver, rechazar) => {
//   setTimeout(() => {
//     console.log("dos segundos despues");

//     const heroe = getHeroeById(2);
//     console.log(heroe);

//     resolver(heroe);

//     // rechazar("No se pudo encontrar el heroe");
//   }, 2000);
// });

// promesa
//   .then((heroe) => {
//     console.log("Then de la promesa", heroe);
//   })
//   .catch((error) => console.warn(error));

const getHeroeByIdAsync = (id) => {
  return new Promise((resolver, rechazar) => {
    setTimeout(() => {
      console.log("dos segundos despues");

      const heroe = getHeroeById(id);
      console.log(heroe);

      if (heroe) {
        resolver(heroe);

        return;
      }

      rechazar("No se pudo encontrar el heroe");
    }, 2000);
  });
};

// getHeroeByIdAsync(10)
//   .then((heroe) => {
//     console.log("Heroe", heroe);
//   })
//   .catch((error) => {
//     console.warn(error);
//   });

getHeroeByIdAsync(10).then(console.log).catch(console.warn);
