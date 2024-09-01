
import { fetchImages } from './js/pixabay-api';
import { renderGallery, clearGallery } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
let currentPage = 1;
let query = '';
let gallery;

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    query = event.currentTarget.elements.user_query.value.trim();

    if (!query) {
        iziToast.error({ title: 'Error', message: 'Please enter a search query.' });
        return;
    }

    clearGallery();
    currentPage = 1;
    fetchAndRenderImages();
});

async function fetchAndRenderImages() {
    try {
        const { hits, totalHits } = await fetchImages(query, currentPage);

        if (hits.length === 0) {
            iziToast.warning({ title: 'No Results', message: 'Sorry, there are no images matching your search query. Please try again!' });
            return;
        }

        renderGallery(hits);
        gallery = new SimpleLightbox('.gallery a');
        gallery.refresh();

        if (currentPage * 12 >= totalHits) {
            iziToast.info({ title: 'End of Results', message: 'You have reached the end of search results.' });
        }
    } catch (error) {
        iziToast.error({ title: 'Error', message: 'Something went wrong. Please try again later.' });
    }
}

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        currentPage += 1;
        fetchAndRenderImages();
    }
});
