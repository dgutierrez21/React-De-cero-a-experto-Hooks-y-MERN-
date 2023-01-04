console.log("Hola Nundo");

// arreglos
// const arr = new Array(100);
// arr.push(1);

const arr = [1, 2, 3, 4];

// no es recomendable usar push porque modifica el arreglo
// arr.push(1);
// arr.push(2);
// arr.push(3);
// arr.push(4);

let arr2 = [...arr, 5];
// arr2.push(5);

// map crea un nuevo arreglo
const arr3 = arr2.map(function (numero) {
  return numero * 2;
});

// si se modifica el arr2, solo ese arreglo se va a modificar

arr3.push(100);

console.log(arr);
console.log(arr2);
console.log(arr3);
