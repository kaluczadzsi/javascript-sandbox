function removeClearButton() {
  document.querySelector('#clear').remove();
}

function removeFirstItem() {
  const ul = document.querySelector('ul');
  const li = document.querySelector('li');

  ul.removeChild(li);
}

function removeItem(itemNumber) {
  //   const lis = document.querySelectorAll('li');
  const ul = document.querySelector('ul');
  const li = document.querySelector(`li:nth-child(${itemNumber})`);

  ul.removeChild(li);

  //   lis.forEach((item, index) => (itemNumber === index ? item.remove() : ''));
}

function removeItem2(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelectorAll('li')[itemNumber];

  ul.removeChild(li);
}

function removeItem3(itemNumber) {
  const lis = document.querySelectorAll('li');
  lis[itemNumber].remove();
}

const removeItem4 = (itemNumber) =>
  document.querySelectorAll('li')[itemNumber - 1].remove();
// removeFirstItem();
// removeClearButton();
// removeItem(1);
// removeItem3(0);
removeItem4(3);
