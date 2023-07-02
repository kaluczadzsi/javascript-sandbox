let output;

const parent = document.querySelector('.parent');

output = parent.childNodes[0];
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3];

output = parent.childNodes[3].innerText = 'Child one';

output = parent.lastChild;

const child = document.querySelector('.child');
output = child.parentElement;
output = child.parentNode;

const secondItem = document.querySelector('.child:nth-child(2)');
output = secondItem.nextSibling.nextSibling.nextSibling.parentElement;

console.log(output);
