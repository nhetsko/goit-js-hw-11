import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const formSearch = document.querySelector('.form-search');
const listImages = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const lightbox = new SimpleLightbox('.gallery a', {captionsData:'alt',captionDelay: 250});
 
formSearch.addEventListener('submit', onSearch);

function onSearch(event) {
    event.preventDefault();
    listImages.innerHTML = " ";
    const inputValue = event.target.elements.search.value;
    loader.style.display = 'block';

    getPictures(inputValue)
        .then(data => {
            loader.style.display = 'none';

            if (!data.hits.length) {
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
            }
            listImages.innerHTML = createGalleryMarkup(data.hits);
            lightbox.refresh();
        })
        .catch((err) => {
            loader.style.display = 'none';
            console.log(err);
        });
  event.currentTarget.reset(); 
}

function getPictures(name) {
 const BASE_URL = 'https://pixabay.com/api/';
 const KEY = '41511305-1e730bfa7be67778e89c40f75';

  const searchParams = new URLSearchParams({
    key: KEY,
    q: name,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  })

  return fetch(`${BASE_URL}?${searchParams}`)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
}

function createGalleryMarkup(arr) {
  return arr.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
    `<li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img
              class="gallery-image"
              src="${webformatURL}"
              alt="${tags}"
              width="360"
            />
          </a>
          <div class="thumb-block">
            <div class="block">
              <h2 class="tittle">Likes</h2>
              <p class="amount">${likes}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Views</h2>
              <p class="amount">${views}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Comments</h2>
              <p class="amount">${comments}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Downloads</h2>
              <p class="amount">${downloads}</p>
            </div>
          </div>
        </li>`)
    .join('');
}
