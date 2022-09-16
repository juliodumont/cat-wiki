import { CatImage, Loader } from '../../components';
import { useGetBreedsQuery } from '../../services/catApi';
import { Breed } from '../../types';
import './Cats.scss';

const Cats = () => {
  const { data, isFetching } = useGetBreedsQuery({});

  if (isFetching) return <Loader />;

  const catBreeds: Breed[] = data.slice(0, 10);

  return (
    <div className="top-breeds-container">
      <h1>Top 10 most searched breeds</h1>
      {catBreeds.map((breed, index) => (
        <div className="top-breed-container" key={index}>
          <div className="top-breed-image">
            <CatImage src={breed?.image?.url} />
          </div>
          <div className="top-breed-info">
            <h2>{`${index + 1}. ${breed.name}`}</h2>
            <p className="p-text">{breed.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cats;
