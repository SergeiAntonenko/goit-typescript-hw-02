import css from "./ImageCard.module.css";

const ImageCard = ({ image, openModal }) => {
  const handleClick = () => {
    openModal(image.urls.regular);
  };
  return (
    <li className={css["imageCard"]}>
      <img
        className={css["image"]}
        src={image.urls.small}
        alt={image.alt_description}
        onClick={handleClick}
      />
    </li>
  );
};

export default ImageCard;
