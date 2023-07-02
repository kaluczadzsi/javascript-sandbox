const clearBtn = document.querySelector('#clear');

// function onClear() {
//   alert('Clear Items');
// }

// JavaScript Event Listener
// clearBtn.onclick = function () {
//   alert('Clear Items');
// };

// clearBtn.onclick = function () {
//   console.log('Clear Items');
// };

//addEventListener
// clearBtn.addEventListener('click', () => {
//   alert('Clear Items');
// });

// clearBtn.addEventListener('click', () => console.log('Clear Items'));

// clearBtn.addEventListener('click', onClear);

/* setTimeout(() => {
  clearBtn.removeEventListener('click', onClear);
}, 5000); */

// setTimeout(() => {
//   clearBtn.click();
// }, 5000);

clearBtn.addEventListener('click', () => {
  document.querySelectorAll('li').forEach((li) => li.remove());
});
