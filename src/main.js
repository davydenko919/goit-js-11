import SimpleLightbox from 'simplelightbox';
import iziToast from "izitoast";

import {getImages} from "./js/pixabay-api.js"
import {createGallery} from "./js/render-functions.js"

const cardPlace = document.querySelector('.card-place')
const form = document.querySelector('.form');
const input = form.querySelector('input');
const QUERY = input.value.trim().toLowerCase().replace(/ /g, "+");

 form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(getImages(QUERY));
    // console.log(createGallery(getImages(QUERY)));
    // cardPlace.innerHTML = createGallery(getImages(QUERY));
    getImages(QUERY)
    .then(arr => {
        cardPlace.innerHTML = createGallery(arr);
        lightbox.refresh();
        form.reset();
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
);

const lightbox = new SimpleLightbox('.card-place li ', {
    captionsData: 'alt',
    captionDelay: 250,
  });


