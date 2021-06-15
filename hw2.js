import pictures from './gallery-items.js'


const cardsContainer = document.querySelector('.js-gallery')
const makeModalOpen = document.querySelector('.js-lightbox')



const cardsMarkup = createGalleryCardsMarkup(pictures)

cardsContainer.insertAdjacentHTML('beforeend', cardsMarkup)

cardsContainer.addEventListener('click', onCardsContainerClick)


function createGalleryCardsMarkup (pictures) {
  return pictures.map( ({preview, original, description}) => {
     return `
     <li class="gallery__item">
        <a
          class="gallery__link"
          href="${original}"
        >
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `
  }).join('')
}

function onCardsContainerClick(e) {
  console.log(e.target);
}

