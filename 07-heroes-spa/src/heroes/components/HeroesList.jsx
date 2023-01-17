import { getHeroesByPublisher } from "../helpers";
import { HeroCard } from "./HeroCard";

export const HeroesList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);

  const liHeroes = heroes.map((hero) => <HeroCard key={hero.id} {...hero} />);

  return <div className="row row-cols-1 row-cols-md-3 g-3">{liHeroes}</div>;
};
