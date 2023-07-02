const itemInput = document.getElementById('item-input');

// const onKeyPress = (e) => {
//   console.log('keypress');
// };

// const onKeyUp = (e) => {
//   console.log('keyup');
// };

const onKeyDown = (e) => {
  // key
  //    if (e.key === 'Enter') {
  //     alert('You pressed enter');
  //   }

  // keyCode
  if (e.keyCode === 13) {
    console.log('You pressed enter');
  }

  // code
  if (e.code === 'Digit1') {
    console.log('You pressed 1');
  }

  if (e.repeat) {
    console.log('You are holding down ' + e.key);
  }

  console.log('Shift: ' + e.shiftKey);
  console.log('Ctrl: ' + e.ctrlKey);
  console.log('Alt: ' + e.altKey);
};

itemInput.addEventListener('keydown', onKeyDown);
