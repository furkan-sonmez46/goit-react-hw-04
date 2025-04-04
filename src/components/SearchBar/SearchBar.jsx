import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Please enter text to search for an image.');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={styles.header}>
      <Toaster position="top-right" />
      <form onSubmit={handleFormSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          value={query}
          onChange={handleInputChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
