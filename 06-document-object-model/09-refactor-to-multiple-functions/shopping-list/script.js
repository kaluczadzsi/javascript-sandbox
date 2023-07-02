function createNewItem(item) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  const button = createElement('button', 'remove-item btn-link text-red');
  const icon = createElement('i', 'fa-solid fa-xmark');

  button.appendChild(icon);
  li.appendChild(button);

  document.querySelector('.items').appendChild(li);
}

createNewItem('Cheese');

function createElement(el, className) {
  const element = document.createElement(el);
  element.className = `${className}`;

  return element;
}
