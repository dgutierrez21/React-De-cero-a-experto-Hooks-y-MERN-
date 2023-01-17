import { getHeroesByPublisher } from "../helpers";

export const HeroesList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);

  const liHeroes = heroes.map(({ id, superhero }) => (
    <li key={id}>{superhero}</li>
  ));

  return <ul>{liHeroes}</ul>;
};
