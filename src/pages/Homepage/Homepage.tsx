import './Homepage.scss';
import { Typography } from 'antd';
import { CatImage, Filter } from '../../components';
import CatWikiLogo from '../../assets/Icons/CatWikiLogo';
import images from '../../constants/images';

const { Text, Title, Paragraph } = Typography;

const Homepage = () => {
  return (
    <main>
      <section className="home-container">
        <div className="home-card-container">
          <div className="card-header-container">
            <div className="card-header-content">
              <CatWikiLogo />
              <p>Get to know more about your cat breed</p>
              <Filter />
            </div>
            <picture>
              <source srcSet={images.mainCardCatLg} media="(min-width:992px)" />
              <source srcSet={images.mainCardCatMd} media="(min-width:768px)" />
              <img src={images.mainCardCatSm} alt="" />
            </picture>
          </div>
          <div className="card-body-container">
            <Title className="card-body-title" level={2}>
              66+ Breeds For you to discover
            </Title>

            <div className="breeds-examples-container">
              <CatImage src="" />
              <CatImage src="" />
              <CatImage src="" />
              <CatImage src="" />
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
            <a href="#">read more</a>
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
