export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  fist_appearance,
  characters,
}) => {
  const heroImageUrl = `/assets/heroes/${id}.jpg`;
  return (
    <div className="col">
      <div className="card">
        <div className="row no-glutters">
          <div className="col-4">
            <img src={heroImageUrl} alt={superhero} className="card-img" />
          </div>

          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              <p>{characters}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
