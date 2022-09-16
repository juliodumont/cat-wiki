import { CatImage, CatTrait, Loader } from '../../components';
import { Breed } from '../../types';
import './CatDetails.scss';
import { useParams } from 'react-router-dom';
import {
  useGetBreedImagesQuery,
  useGetBreedQuery,
  useGetBreedsQuery,
  useGetCatImagesQuery
} from '../../services/catApi';

const CatDetails = () => {
  const { breedId } = useParams();

  const { data } = useGetBreedsQuery({});
  const catBreeds: Breed[] = data;

  const breedData = catBreeds
    ? catBreeds.filter((breed: Breed) => breed.id == breedId)[0]
    : ({} as Breed);

  const { data: moreImages, isFetching } = useGetCatImagesQuery({
    limit: 8,
    order: 'RANDOM',
    breedId
  });

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
    stranger_friendly,
    image
  } = breedData ?? ({} as Breed);

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
      {isFetching ? (
        <Loader />
      ) : (
        <>
          <div className="cat-details-container">
            <div className="cat-image-container">
              <CatImage src={image.url} size="lg" />
            </div>
            <div className="cat-info-container">
              <div className="cat-details">
                <h1 className="h-text-600">{name}</h1>
                <p className="p-text">{description}</p>
                <p className="trait">
                  <span className="trait">Temperament: </span>
                  {temperament}
                </p>
                <p className="trait">
                  <span className="trait">Origin: </span>
                  {origin}
                </p>
                <p className="trait">
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
          </div>
          <div className="other-photos-container">
            <h2 className="h-text-600">Other photos</h2>
            <div className="other-photos">
              {moreImages.map((image: { url: string; id: string }) => (
                <CatImage src={image.url} key={image.id} />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CatDetails;
