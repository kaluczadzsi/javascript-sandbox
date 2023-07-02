const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-element';
div.setAttribute('title', 'my-element');

const text = document.createTextNode('Hello World');
div.appendChild(text);

// document.body.insertAdjacentElement('afterend', div);
document.querySelector('ul').insertAdjacentElement('beforebegin', div);
