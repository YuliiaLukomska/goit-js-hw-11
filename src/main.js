import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import icon from './img/left-close.svg';

const refs = {
  form: document.querySelector('form'),
  button: document.querySelector('button'),
};
const API_KEY = '41896397-c8b989416d0fb53fd1030eb96';
const BASE_URL = 'https://pixabay.com/api/';

refs.form.addEventListener('submit', onSearchImage);

function onSearchImage(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const inputValue = form.elements.image.value;

  searchImage(inputValue)
    .then(data => {
      console.log(data);
      if (data.total === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: '#FAFAFB',
          messageLineHeight: '24px',
          messageSize: '16px',
          position: 'topRight',
          iconUrl: icon,
          backgroundColor: '#EF4040',
          maxWidth: '350px',
          timeout: false,
        });
      }
    })
    .catch(error => console.log(error))
    .finally(() => {
      form.reset();
    });
}

function searchImage(inputValue) {
  const urlParam = new URLSearchParams({
    key: API_KEY,
    q: inputValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  return fetch(`${BASE_URL}?${urlParam}`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    } else {
      return resp.json();
    }
  });
}
