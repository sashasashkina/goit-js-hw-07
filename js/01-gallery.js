import { galleryItems } from "./gallery-items.js";
// Change code below this line
// console.log(galleryItems);
const list = document.querySelector(".gallery");
function createMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
     </a>
   </li>`
    )
    .join("");
}

list.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

list.addEventListener("click", handleClick);

function handleClick(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }
  const currentProduct = event.target.closest(".gallery__image");
  // console.log(currentProduct);

  const modal = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`,

    {
      onShow: (modal) => window.addEventListener("keydown", onEscKeyPress),
      onClose: (modal) => window.removeEventListener("keydown", onEscKeyPress),
    }
  );

  modal.show();
}

function onEscKeyPress(event) {
  if (event.code === "Escape") {
    modal.close();
  }
}
