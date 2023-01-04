//  variables y constantes

// Olvidarse de var para siempre

// utilizar const y let

const nombre = "Pedro";

const apellido = "Juarez";

let valorDado = 10;

valorDado = 5;

console.log(nombre, apellido, valorDado);

// scope de const y let
if (true) {
  let valorDado = 20;

  console.log(valorDado);
}

console.log(valorDado);
