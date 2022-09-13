import './CatImage.scss';
import { Typography } from 'antd';

type CatImageProps = {
  className?: string;
  src: string;
  size?: 'sm' | 'lg';
  name?: string;
};

const CatImage = ({ src, size, name, className }: CatImageProps) => {
  return (
    <div className={`cat-image-container ${size ? size : 'sm'} ${className}`}>
      <img src={src} alt={name ?? `Cat: ${name}`} />;
      {name && <Typography.Paragraph className="cat-name">{name}</Typography.Paragraph>}
    </div>
  );
};

export default CatImage;
