import pictures from './gallery-items.js'


const cardsContainer = document.querySelector('.js-gallery')
const makeModalOpen = document.querySelector('.js-lightbox')
const makeModalClose = document.querySelector('.lightbox__button')
const openOriginalImg = document.querySelector('.lightbox__image')


const cardsMarkup = createGalleryCardsMarkup(pictures)

cardsContainer.insertAdjacentHTML('beforeend', cardsMarkup)

cardsContainer.addEventListener('click', onCardsContainerClick)

makeModalClose.addEventListener('click', () => {
  makeModalOpen.classList.remove('is-open');
  
})

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
  e.preventDefault();
  if (e.target.classList.contains('gallery__image')) {
    makeModalOpen.classList.add('is-open')
  openOriginalImg.src = ''
  openOriginalImg.src = e.target.dataset.source
  }
}