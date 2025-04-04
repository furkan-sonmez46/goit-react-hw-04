import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageModal from './components/ImageModal/ImageModal';
import './App.css';

const UNSPLASH_API_URL = 'https://api.unsplash.com/search/photos';
const ACCESS_KEY = 'YOUR_UNSPLASH_ACCESS_KEY'; // Replace with your Unsplash Access Key

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const handleSearch = async searchQuery => {
    setLoading(true);
    setError(null);
    setQuery(searchQuery);
    setPage(1); // Reset to the first page
    try {
      const response = await axios.get(UNSPLASH_API_URL, {
        params: {
          query: searchQuery,
          page: 1,
          per_page: 12,
          client_id: ACCESS_KEY,
        },
      });
      setImages(response.data.results);
    } catch (err) {
      setError('Failed to fetch images. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    setLoading(true);
    try {
      const response = await axios.get(UNSPLASH_API_URL, {
        params: {
          query,
          page: page + 1,
          per_page: 12,
          client_id: ACCESS_KEY,
        },
      });
      setImages(prevImages => [...prevImages, ...response.data.results]);
      setPage(prevPage => prevPage + 1);
    } catch (err) {
      setError('Failed to load more images. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleImageClick = imageUrl => {
    setModalImage(imageUrl);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalImage(null);
    setIsModalOpen(false);
  };

  // Removed duplicate handleLoadMore function

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery
        images={images.map(image => ({
          id: image.id,
          small: image.urls.small,
          regular: image.urls.regular,
          alt: image.alt_description,
        }))}
        onImageClick={imageUrl => handleImageClick(imageUrl)}
      />
      {loading && <Loader />} {/* Loader is rendered below the gallery */}
      {images.length > 0 && (
        <LoadMoreBtn onLoadMore={handleLoadMore} images={images} />
      )}
      <ImageModal
        image={modalImage}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}

export default App;
