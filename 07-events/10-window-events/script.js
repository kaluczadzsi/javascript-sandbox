// window.onload = function () {
//   document.querySelector('h1').textContent = 'Hello World';
// };

window.addEventListener('load', () => {
  console.log('Page loaded');
});

window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded');
});

console.log('Run me');

document.querySelector('h1').innerText = 'Hello World';

window.addEventListener('resize', () => {
  document.querySelector(
    'h1'
  ).innerText = `Resized to ${window.innerWidth} ${window.innerHeight}`;
});

window.addEventListener('scroll', () => {
  console.log(`Scrolled: ${window.scrollX}, ${window.scrollY}`);
});

window.addEventListener('focus', () => {
  document.querySelectorAll('p').forEach((p) => {
    p.style.color = 'blue';
  });
});

window.addEventListener('blur', () => {
  document.querySelectorAll('p').forEach((p) => {
    p.style.color = 'black';
  });
});
