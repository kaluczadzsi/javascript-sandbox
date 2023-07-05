const img = document.querySelector('img');
let pEls = document.querySelectorAll('p');
const button = document.getElementById('generate');

function fetchUser() {
  fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then((data) => {
      const person = data.results[0];

      displayUser(person);
    });
}

function displayUser(user) {
  const personObj = {
    name: `${user.name.first} ${user.name.last}`,
    email: user.email,
    phone: user.phone,
    city: user.location.city,
    age: user.dob.age,
    imgUrl: user.picture.large,
  };

  pEls.forEach((p, index) => {
    let key = `${Object.keys(personObj)[index]}`;
    key = key[0].toUpperCase() + key.slice(1).toLowerCase();
    p.innerHTML = `<strong>${key}</strong>: ${Object.values(personObj)[index]}`;
  });

  img.src = personObj.imgUrl;
}

button.addEventListener('click', fetchUser);
