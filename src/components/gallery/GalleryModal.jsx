import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { CLOSE_IMAGE } from "../../utils/actions";
import { useGalleryContext } from "../../utils/galleryContext/GalleryContext";

const GalleryModal = () => {
  const { currentModalImage, dispatch } = useGalleryContext();

  const closeModalImage = (e) => {
    if (e.target.classList.contains("gallery__lightbox")) {
      dispatch({ type: CLOSE_IMAGE });
    }
  };

  return (
    <div className="gallery__lightbox" onClick={(e) => closeModalImage(e)}>
      <h4>{currentModalImage.name}</h4>
      <div className="gallery__lightbox__card">
        <div className="gallery__lightbox__card__image">
          <LazyLoadImage
            src={currentModalImage.image}
            alt={currentModalImage.name}
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
