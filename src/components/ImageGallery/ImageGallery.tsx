import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

interface Props {
  images: Image[];
  openModal: (url: string) => void;
}

const ImageGallery: React.FC<Props> = ({ images, openModal }) => {
  return (
    <ul className={css.imageGallery}>
      {images.map((image) => (
        <ImageCard key={image.id} image={image} openModal={openModal} />
      ))}
    </ul>
  );
};

export default ImageGallery;
