import React from "react";
import s from "./ImageGalleryItem.module.css";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ image, largeImageURL, onModalOpen }) => {
  // console.log(onModalOpen);
  const { webformatURL, tags } = image;

  return (
    <li className={s.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        onClick={(evt) => {
          console.log(evt.target);
          onModalOpen(evt.target.attributes["data-large"].value);
        }}
        className={s.ImageGalleryItemImage}
        data-large={largeImageURL}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onModalOpen: PropTypes.func.isRequired,
};
export default ImageGalleryItem;
