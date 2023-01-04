import { heroes } from "./data/heroes";

console.log(heroes);

// ejercicio 1
const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

const res1 = getHeroeById(2);

console.log(res1);
console.log(res1.name);

// ejercicio 2
const getHeroeByOwner = (owner) =>
  heroes.filter((heroe) => heroe.owner === owner);

const heroesMarvel = getHeroeByOwner("Marvel");

let heroesM = "";

heroesMarvel.forEach((heroe) => (heroesM += heroe.name + ", "));

console.log(heroesMarvel);
console.log(heroesM);
