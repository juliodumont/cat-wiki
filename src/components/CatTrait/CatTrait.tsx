import './CatTrait.scss';

type CatTraitProps = {
  trait: {
    name: string;
    level: number;
  };
};

const CatTrait = ({ trait }: CatTraitProps) => {
  const traitActive = [1, 2, 3, 4, 5].map((level) => (trait.level >= level ? true : false));

  return (
    <div className="cat-trait-container">
      <p className="trait">{trait.name}:</p>
      <div className="trait-level-container">
        {traitActive.map((isActive, index) => (
          <div key={index} className={`trait-item ${isActive ? 'active' : 'inactive'}`}></div>
        ))}
      </div>
    </div>
  );
};

export default CatTrait;
