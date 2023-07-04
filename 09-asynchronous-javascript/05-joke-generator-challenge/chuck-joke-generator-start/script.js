const jokeEl = document.querySelector('.joke');
const btn = document.querySelector('button');
const xhr = new XMLHttpRequest();

function loadJoke() {
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        jokeEl.innerText = JSON.parse(this.responseText).value;
      } else {
        jokeEl.innerText = 'Something went wrong ...';
      }
    }
  };

  xhr.send();
}

btn.addEventListener('click', loadJoke);
