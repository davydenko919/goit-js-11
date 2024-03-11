import SimpleLightbox from 'simplelightbox';
import iziToast from 'izitoast';
import 'simplelightbox/dist/simple-lightbox.min.css';
import {getImages} from "./js/pixabay-api.js"
import {createGallery} from "./js/render-functions.js"

const cardPlace = document.querySelector('.card-place');
const form = document.querySelector('.form');
const input = form.querySelector('.input');
const loader = document.querySelector('.loader-div');
loader.style.display = 'none';


form.addEventListener('submit', (event) => {
    event.preventDefault();
    loader.style.display = 'flex';
    cardPlace.innerHTML = '';
    const QUERY = input.value.trim().toLowerCase().replace(/ /g, "+");
    getImages(QUERY)
    .then(arr => {
      if (arr.length === 0) {
        iziToast.error({
            message:
              'Sorry, there are no images matching your search query. Please try again!',
          });
          loader.style.display = 'none';
      } else {
        cardPlace.innerHTML = createGallery(arr);
        lightbox.refresh();
        form.reset();
        loader.style.display = 'none';
      }
       
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

