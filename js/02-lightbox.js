import { galleryItems } from "./gallery-items.js";

const refs = {
  gallery: document.querySelector(".gallery"),
};

refs.gallery.insertAdjacentHTML(
  "afterbegin",
  createGalleryItemsMarkup(galleryItems)
);

let gallery = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});

function createGalleryItemsMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<a  class="gallery__item" 
                    href="${original}">
                    <img class="gallery__image"                   
                    src="${preview}" 
                    alt="${description}"/></a>`;
    })
    .join("");
}
