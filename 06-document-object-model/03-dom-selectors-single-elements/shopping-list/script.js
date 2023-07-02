// document.getElementById()
const title = document.getElementById('app-title');

// Set attributes
title.id = 'new-id';
title.setAttribute('class', 'title');

// Get/chang1e content
title.textContent = 'Hello World';
title.innerText = 'Hello World';
title.innerHTML = '<strong>Shopping List</strong>';

// Change styles
title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.border = '10px solid red';
title.style.borderRadius = '8px';

// document.querySelector()
console.log(document.querySelector('h1'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('li:nth-child(2)'));

const list = document.querySelector('ul');
const firstItem = list.querySelector('li');
