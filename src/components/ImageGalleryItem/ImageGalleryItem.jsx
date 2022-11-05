import React from "react";
export default function ImageGalleryItem({
  webformatURL,
  largeImageURL,
  tags,
  showModal,
}) {
  return (
    <>
      <li className="imageGalleryItem">
        <img
          onClick={() => {
            showModal(largeImageURL);
          }}
          className="imageGalleryItem-image"
          src={webformatURL}
          alt={tags}
        />
      </li>
    </>
  );
}
