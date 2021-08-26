import React from "react";
import { useGalleryContext } from "../../utils/galleryContext/GalleryContext";
import GalleryBlock from "./GalleryBlock";
import GalleryModal from "./GalleryModal";

const Gallery = () => {
  const dataFromGalleryContext = useGalleryContext();

  const { gallery, lightboxStatus } = dataFromGalleryContext;

  return (
    <>
      {lightboxStatus && <GalleryModal />}
      <div className="gallery">
        <div className="container">
          <h2 className="heading animate">Our Writers' Cities</h2>
          <div className="row">
            {gallery.length > 0
              ? gallery.map((galleryItem) => {
                  return (
                    <GalleryBlock
                      galleryItem={galleryItem}
                      key={galleryItem.id}
                    />
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
