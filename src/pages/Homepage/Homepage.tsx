import './Homepage.scss';
import { Typography } from 'antd';
import { CatImage, Filter, Loader } from '../../components';
import CatWikiLogo from '../../assets/Icons/CatWikiLogo';
import images from '../../constants/images';
import { useGetBreedsQuery } from '../../services/catApi';
import { Breed } from '../../types';
import { Link, useNavigate } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetBreedsQuery({});
  const navigate = useNavigate();

  if (isFetching) return <Loader />;

  const catBreeds: Breed[] = data;

  const breedsExamplesImages = ['Abyssinian', 'Chartreux', 'Balinese', 'Norwegian Forest Cat'].map(
    (catName) => {
      const cat = catBreeds.filter((cat) => cat.name === catName)[0];
      return { url: cat.image.url, name: cat.name };
    }
  );

  const handleBreedSelect = (breed: string) => {
    const breedId = catBreeds.filter((cat) => cat.name === breed)[0].id;
    navigate(`/details/${breedId}`);
  };

  return (
    <main>
      <section className="home-container">
        <div className="home-card-container">
          <div className="card-header-container">
            <div className="card-header-content">
              <CatWikiLogo />
              <p>
                Get to know more about <br /> your cat breed
              </p>
              <Filter onSelect={handleBreedSelect} />
            </div>
            <picture>
              <source srcSet={images.mainCardCatLg} media="(min-width:992px)" />
              <source srcSet={images.mainCardCatMd} media="(min-width:768px)" />
              <img src={images.mainCardCatSm} alt="" />
            </picture>
          </div>
          <div className="card-body-container">
            <p>Most Searched Breeds</p>
            <div className="deco-div"></div>
            <div className="card-body-title-container">
              <Title className="card-body-title" level={2}>
                66+ Breeds For you <br /> to discover
              </Title>
              <Link to="/topcats">See more</Link>
            </div>

            <div className="breeds-examples-container">
              {breedsExamplesImages.map((image) => (
                <CatImage
                  className="example-images"
                  src={image.url}
                  name={image.name}
                  key={image.name}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="home-introduction-container">
          <div className="home-introduction">
            <div className="deco-div"></div>
            <Title className="home-introduction-title" level={2}>
              Why should you have a cat?
            </Title>
            <Paragraph className="home-introduction-p p-text">
              Having a cat around you can actually trigger the release of calming chemicals in your
              body which lower your stress and anxiety leves
            </Paragraph>
            <a
              href="https://www.helpguide.org/articles/healthy-living/joys-of-owning-a-cat.htm"
              target="_blank"
              rel="noreferrer"
            >
              read more
            </a>
          </div>
          <div className="introduction-decoration-container">
            <div className="decoration-set">
              <img src={images.decoCatImage1} className="decoration-image deco-1" />
              <img src={images.decoCatImage2} className="decoration-image deco-2" />
            </div>
            <div className="decoration-set">
              <img src={images.decoCatImage3} className="decoration-image deco-3" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Homepage;
