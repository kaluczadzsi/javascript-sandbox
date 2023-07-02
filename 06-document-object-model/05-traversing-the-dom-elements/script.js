// Get child elements

let output;

const parent = document.querySelector('.parent');

output = parent.children;
output = parent.children[1].innerText;
output = parent.children[1].className;

parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = 'red';

parent.firstElementChild.innerText = 'Child One';
parent.firstElementChild.style.color = 'green';

// Get parent elements from child

const child = document.querySelector('.child');
output = child.parentElement;
output = child.parentElement.style.border = '1px solid #ccc';

// Get sibling elements
const secondItem = document.querySelector('.child:nth-child(2)');
output = secondItem.nextElementSibling;
output = secondItem.previousElementSibling;
console.log(output);
