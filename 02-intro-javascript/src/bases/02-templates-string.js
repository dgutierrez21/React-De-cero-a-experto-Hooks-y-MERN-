// templates string

const nombre = "Pedro";

const apellido = "Juarez";

// const nombreCompleto = nombre + " " + apellido;
const nombreCompleto = `${nombre}
${apellido}
${5 + 5}`;

console.log(nombreCompleto);

function getSaludo(nombre) {
  return `Hola mundo ${nombre}`;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);
