import React from 'react';
import ImageShow from './ImageShow.js';

const ImageList = ({ images }) => {
  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });
  return (
    <div>
      <h1>ImageList</h1>
      <div>{renderedImages}</div>
    </div>
  );
};

export default ImageList;
