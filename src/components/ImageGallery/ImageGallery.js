import React, { Component } from "react";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import propTypes from "prop-types";
import s from "./ImageGallery.module.css";
// import imageAPI from "../services/image-api";

class imageGallery extends Component {
  static defaultProps = { imageArr: propTypes.array };
  static propTypes = {
    imageArr: propTypes.array,
    onModalOpen: propTypes.func,
  };
  render() {
    // console.log(this.props.imageArr);
    const { imageArr, onModalOpen } = this.props;
    return (
      <div>
        <ul className={s.ImageGallery}>
          {imageArr &&
            imageArr.map((image) => {
              return (
                <ImageGalleryItem
                  image={image}
                  key={image.id}
                  largeImageURL={image.largeImageURL}
                  onModalOpen={onModalOpen}
                />
              );
            })}
        </ul>
      </div>
    );
  }
}

export default imageGallery;