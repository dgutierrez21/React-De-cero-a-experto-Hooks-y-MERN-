console.log("Hola Nundo");

// Funciones

// no se recomienda usar declaracion de funcion, ya que es muy facil sobreescribirla
function saludar(nombre) {
  return `Hola, ${nombre}`;
}

saludar = 30;

console.log(saludar);
// console.log(saludar("Pedro"))

// en lugar, se recomienda usar una expresión de función
const saludar2 = function (nombre) {
  return `Hola, ${nombre}`;
};

// saludar2 = 50; // Uncaught TypeError: Assignment to constant variable.

console.log(saludar2("Juan"));

// funciones flecha
const saludar3 = (nombre) => {
  return `Hola, ${nombre}`;
};

console.log(saludar3("Pepe"));

// si lo único que hace una funcion flecha es un return, se puede simplificar aún más
const saludar4 = (nombre) => `Hola, ${nombre}`;

console.log(saludar4("Pablo"));

// devuelve un objeto

const obtenerUsuario = () => ({
  uid: "EFG321",
  nombreUsuario: "pedro2021",
});

console.log(obtenerUsuario());

// tarea
const getUsuarioActivo = (nombre) => ({
  uid: "EFR459",
  nombreUsuario: nombre,
});

const usuarioActivo = getUsuarioActivo("Ryan2932");

console.log(usuarioActivo);
