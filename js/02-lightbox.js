import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const refs = {
  gallery: document.querySelector(".gallery"),
};

refs.gallery.insertAdjacentHTML(
  "afterbegin",
  createGalleryItemsMarkup(galleryItems)
);
const linksEl = refs.gallery.querySelectorAll(".gallery__item");
linksEl.forEach((link) => {
  addPreventDefaultLink(link);
});

refs.gallery.addEventListener("click", onGalleryItemsClick);

function onGalleryItemsClick(e) {
  let gallery = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
    captionsData: "alt",
  });
  console.log(gallery);
}

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

function addPreventDefaultLink(link) {
  return link.addEventListener("click", (e) => {
    e.preventDefault();
  });
}
