console.log("Hola Nundo");

// Desestructuración de objetos

const persona = {
  nombre: "Pedro",
  edad: 30,
  clave: "3322",
};

const { nombre, clave, edad } = persona;
// nota: se puede renombrar usando dos puntos, ej --- nombre:nombre2

// console.log(persona.nombre)
console.log(nombre);
console.log(clave);
console.log(edad);

const context = ({ clave, edad, nombre, rango = "Capitan" }) => {
  console.log(clave, edad, nombre, rango);

  return {
    nombreClave: clave,
    anios: edad,
    latLng: {
      lat: 43.30323,
      lng: 5.0329,
    },
  };
};

const {
  nombreClave,
  anios,
  latLng: { lat, lng }, // Desestructuación anidada de Objetos
} = context(persona);

console.log(nombreClave, anios);

// console.log(latLng) // error

console.log(lat);
console.log(lng);
