const refs = {
  form: document.querySelector('form'),
  button: document.querySelector('button'),
};
const API_KEY = '41896397-c8b989416d0fb53fd1030eb96';
const BASE_URL = 'https://pixabay.com/api/';

refs.form.addEventListener('submit', onSearchImage);

function onSearchImage(event) {
  event.preventDefault();
  searchImage()
    .then(data => console.log(data))
    .catch(error => console.log(error));
}

function searchImage() {
  const urlParam = new URLSearchParams({
    key: API_KEY,
    q: 'yellow+flower',
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
