import './CatTrait.scss';

type CatTraitProps = {
  traitName: string;
};

const CatTrait = ({ traitName }: CatTraitProps) => {
  return (
    <div className="cat-trait-container">
      <p className="trait">{traitName}</p>
      <div className="trait-level-container"></div>
    </div>
  );
};

export default CatTrait;
