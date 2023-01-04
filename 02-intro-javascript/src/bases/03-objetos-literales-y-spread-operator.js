console.log("Hola Nundo");

// objetos literales y spread operator

const persona = {
  nombre: "Pedro",
  apellido: "Sanchez",
  edad: 45,
  direccion: {
    ciudad: "New York",
    zip: 2309333,
    lat: 14.32092,
    lng: 34.023933,
  },
};

console.table(persona);
console.log({ persona });
console.log(persona);

// se guarda la referencia y no el valor
const persona2 = persona;
persona2.nombre = "Peter";

// lo correcto es crear un nuevo objeto y usar el operador spread para copiar las propiedades del objeto
const persona3 = { ...persona };
persona3.nombre = "Alberto";

console.log(persona);
console.log(persona2);
console.log(persona3);
