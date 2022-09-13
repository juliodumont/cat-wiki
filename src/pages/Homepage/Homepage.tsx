import './Homepage.scss';
import { Typography } from 'antd';
import { CatImage } from '../../components';

const { Text, Title, Paragraph } = Typography;

const Homepage = () => {
  return (
    <main>
      <section className="home-container">
        <div className="home-card-container">
          <div className="card-header-container"></div>
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
          <Title className="home-introduction-title" level={2}>
            Why should you have a cat?
          </Title>
          <Paragraph className="home-introduction-p p-text">
            Having a cat around you can actually trigger the release of calming chemicals in your
            body which lower your stress and anxiety leves
          </Paragraph>
          <a href="#">read more</a>
          <div className="introduction-decoration-container">
            <div className="decoration-set">
              <img src="../../assets/image1.png" className="decoration-image" />
              <img src="../../assets/decoration-image-2.png" className="decoration-image" />
            </div>
            <img src="../../assets/image3.png" className="decoration-image" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Homepage;
