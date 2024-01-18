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
        alert(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }
    })
    .catch(error => console.log(error));
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
