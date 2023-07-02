function insertAfter(newEl, existingEl) {
  existingEl.insertAdjacentElement('afterend', newEl);
}

const li = document.createElement('li');
li.textContent = 'Insert Me After!';

const firstItem = document.querySelector('li:first-child');
insertAfter(li, firstItem);
