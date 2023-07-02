// querySelectorAll()

const listItems = document.querySelectorAll('.item');
// console.log(listItems[1].innerText);

// listItems.forEach((li, index) => {
//   li.style.color = 'red';
//   if (index === 1) li.remove();

//   if (index === 0) {
//     li.innerHTML = `
//     Oranges
//     <button class="remove-item btn-link text-red">
//       <i class="fa-solid fa-xmark"></i>
//     </button>
// `;
//   }
// });

// const listItems2 = document.getElementsByClassName('item');
// console.log(listItems2);

// Array.from(listItems2).forEach((item) => console.log(item));

const listItem3 = document.getElementsByTagName('li');
console.log(listItem3);
