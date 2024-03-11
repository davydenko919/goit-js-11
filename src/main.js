import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import {getImages} from "./js/pixabay-api.js"
import {createGallery} from "./js/render-functions.js"

const cardPlace = document.querySelector('.card-place');
const form = document.querySelector('.form');
const input = form.querySelector('.input');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    cardPlace.innerHTML = '';
    const QUERY = input.value.trim().toLowerCase().replace(/ /g, "+");
    getImages(QUERY)
    .then(arr => {
        cardPlace.innerHTML = createGallery(arr);
        lightbox.refresh();
        form.reset();
      })
      .catch(error => {
        iziToast.error({
          message:
            `${error}`,
        });
      });
    }
);

const lightbox = new SimpleLightbox('.gallery-link', {
    captionsData: 'alt',
    captionDelay: 250,
});

