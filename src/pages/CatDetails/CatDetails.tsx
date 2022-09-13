import { CatTrait } from '../../components';
import { Breed, CatTraits } from '../../types';
import './CatDetails.scss';

const CatDetails = () => {
  const {
    name,
    description,
    temperament,
    origin,
    life_span,
    adaptability,
    affection_level,
    child_friendly,
    grooming,
    intelligence,
    health_issues,
    social_needs,
    stranger_friendly
  } = {} as Breed;

  const traits = [
    {
      name: 'Adaptability',
      level: adaptability
    },
    {
      name: 'Affection level',
      level: affection_level
    },
    {
      name: 'Child friendly',
      level: child_friendly
    },
    {
      name: 'Grooming',
      level: grooming
    },
    {
      name: 'Intelligence',
      level: intelligence
    },
    {
      name: 'Health issues',
      level: health_issues
    },
    {
      name: 'Social needs',
      level: social_needs
    },
    {
      name: 'Stranger friendly',
      level: stranger_friendly
    }
  ];

  return (
    <>
      <div className="cat-details-container">
        <div className="cat-details">
          <h1>{name}</h1>
          <p className="p-text">{description}</p>
          <p>
            <span className="trait">Temperament: </span>
            {temperament}
          </p>
          <p>
            <span className="trait">Origin: </span>
            {origin}
          </p>
          <p>
            <span className="trait">Life Span: </span>
            {life_span}
          </p>
        </div>
        <div className="cat-traits">
          {traits.map((trait) => (
            <CatTrait key={trait.name} trait={trait} />
          ))}
        </div>
      </div>
      <div className="other-photos-container">
        <h2>Other photos</h2>
        <div className="other-photos"></div>
      </div>
    </>
  );
};

export default CatDetails;
