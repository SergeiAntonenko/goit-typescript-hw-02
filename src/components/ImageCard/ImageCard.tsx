import css from "./ImageCard.module.css";

interface Image {
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

interface Props {
  image: Image;
  openModal: (url: string) => void;
}

const ImageCard: React.FC<Props> = ({ image, openModal }) => {
  const handleClick = () => {
    openModal(image.urls.regular);
  };

  return (
    <li className={css.imageCard}>
      <img
        className={css.image}
        src={image.urls.small}
        alt={image.alt_description}
        onClick={handleClick}
      />
    </li>
  );
};

export default ImageCard;
