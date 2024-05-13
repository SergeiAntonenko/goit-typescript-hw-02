import { useEffect, useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import SearchBar from "../SearchBar/SearchBar";
import { fetchImages } from "../../api/images";
import css from "./App.module.css";

interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [tapImage, setTapImage] = useState<string>("");
  const [totalImages, setTotalImages] = useState<number>(0);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const openModal = (imageUrl: string) => {
    setTapImage(imageUrl);
    setIsOpen(true);
  };

  const closeModal = () => {
    setTapImage("");
    setIsOpen(false);
  };

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      const getImages = async () => {
        try {
          const response = await fetchImages(query, page);
          if (response) {
            setTotalImages(response.total);
            if (response.results.length === 0) {
              setError("No results found");
            } else {
              setImages((prev) => [...prev, ...response.results]);
              setError("");
            }
          } else {
            setError("Error fetching images");
          }
        } catch (error) {
          console.log(error);
          setError("Error fetching images");
        } finally {
          setIsLoading(false);
        }
      };
      getImages();
    }
  }, [query, page]);

  const handleSubmit = (newQuery: string) => {
    if (newQuery === query) {
      return;
    }
    setIsLoading(true);
    setImages([]);
    setQuery(newQuery);
    setPage(1);
    setIsSubmitted(true);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSubmit} />
      <ImageGallery images={images} openModal={openModal} />
      {isSubmitted && error && !isLoading && <ErrorMessage message={error} />}
      <ImageModal isOpen={isOpen} closeModal={closeModal} imageUrl={tapImage} />
      {isLoading && !error && <Loader />}
      {!isLoading && !error && images.length < totalImages && (
        <LoadMoreBtn onLoadMore={handleLoadMore} />
      )}
    </div>
  );
}

export default App;
