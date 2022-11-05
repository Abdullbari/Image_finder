import React from "react";
import ImageGalleryItem from "../ImageGalleryItem";

export default function ImageGallery({ images, toggleModal }) {
  const galleryImages = images.map((item) => (
    <ImageGalleryItem showModal={toggleModal} key={item.id} {...item} />
  ));
  return (
    <>
      <div className="gallery">
        <ul className="imageGallery">{galleryImages}</ul>
      </div>
    </>
  );
}
