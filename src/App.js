import React, { useState } from 'react';
import './style.css';
import Searchbar from './SearchBar.js';
import ImageList from './ImageList.js';
import searchImages from './utils/api.js';

export default function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);

    setImages(result);
    console.log(result);
  };
  return (
    <div>
      <h1>Photo Gallery Generator from Unsplash</h1>

      <Searchbar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}
