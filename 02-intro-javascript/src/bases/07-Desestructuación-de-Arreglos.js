console.log("Hola Nundo");

const personajes = ["Goku", "Vegeta", "Trunks"];

console.log(personajes);
console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

console.log(`*
*
*
*`);

// Desestructuración de arreglos
const [, , p3] = personajes;

console.log(p3);

const devuelveArr = () => {
  return ["ABC", 123];
};

const [letras, numeros] = devuelveArr();

console.log(letras);

console.log(numeros);

console.log(`*
*
*
*`);

// tarea
const state = (valor) => {
  return [valor, (nombre) => console.log(`Hola ${nombre}`)];
};

const [nombre, setNombre] = state("Hudson");

console.log(nombre);

setNombre(nombre);
