import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { OPEN_IMAGE } from "../../utils/actions";
import { useGalleryContext } from "../../utils/galleryContext/GalleryContext";

const GalleryBlock = ({ galleryItem }) => {
  const galleryContext = useGalleryContext();
  const { dispatch } = galleryContext;

  const openImageModal = () => {
    // open the image whose object was clicked
    dispatch({ type: OPEN_IMAGE, payload: { image: galleryItem } });
  };

  return (
    <div className="col-3">
      <div className="gallery__image animate" onClick={() => openImageModal()}>
        <LazyLoadImage src={galleryItem.image} alt={galleryItem.name} />
      </div>
    </div>
  );
};

export default GalleryBlock;
