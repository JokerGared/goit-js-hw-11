import { refs } from '../main';
export function renderImages(images) {
  const markup = imagesTemplate(images);
  refs.gallery.innerHTML = markup;
}
function imageTemplate({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `<li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
        <div class="characteristics">
          <div class="characteristics-box">
            <span class="characteristics-heading">Likes</span
            ><span class="characteristics-item">${likes}</span>
          </div>
          <div class="characteristics-box">
            <span class="characteristics-heading">Views</span
            ><span class="characteristics-item">${views}</span>
          </div>
          <div class="characteristics-box">
            <span class="characteristics-heading">Comments</span
            ><span class="characteristics-item">${comments}</span>
          </div>
          <div class="characteristics-box">
            <span class="characteristics-heading">Downloads</span
            ><span class="characteristics-item">${downloads}</span>
          </div>
        </div>
      </a>
    </li>`;
}
function imagesTemplate(images) {
  return images.map(imageTemplate).join();
}
export function clearGallery() {
  refs.gallery.innerHTML = '';
}
