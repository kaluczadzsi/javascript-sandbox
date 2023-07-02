const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelector('li');

function run() {
  // ClassName
  //   console.log(itemList.className);
  //   text.className = 'dark';
  // ClassList
  //   console.log(itemList.classList);
  //   itemList.classList.forEach((c) => console.log(c));
  //   text.classList.add('dark');
  //   text.classList.remove('dark');
  //   text.classList.toggle('dark');
  //   text.classList.toggle('hidden');
  //   text.classList.replace('card', 'dark');
  // Change style
  //   itemList.style.lineHeight = 3;
}

document.querySelector('button').addEventListener('click', run);
