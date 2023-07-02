const logo = document.querySelector('img');
const onClick = () => console.log('click event');
const onDoubleClick = () => {
  if (document.body.style.background !== 'purple') {
    document.body.style.background = 'purple';
    document.body.style.color = 'white';
  } else {
    document.body.style.background = 'white';
    document.body.style.color = 'black';
  }
};

const onRightClick = () => console.log('right click event');
const onMouseDown = () => console.log('mouse down event');
const onMouseUp = () => console.log('mouse up event');
const onMouseWheel = () => console.log('mouse wheel event');
const onMouseOver = () => console.log('mouse over event');
const onMouseOut = () => console.log('mouse out event');
const onDragStart = () => console.log('drag start event');
const onDragEnd = () => console.log('drag end event');
const onDrag = () => console.log('drag event');

// Event Listeners
// logo.addEventListener('click', onClick);
// logo.addEventListener('dblclick', onDoubleClick);
// logo.addEventListener('mousedown', onMouseDown);
// logo.addEventListener('mouseup', onMouseUp);
// logo.addEventListener('wheel', onMouseUp);
// logo.addEventListener('mouseover', onMouseOver);
// logo.addEventListener('mouseout', onMouseOut);
// logo.addEventListener('dragstart', onDragStart);
// logo.addEventListener('dragend', onDragEnd);
// logo.addEventListener('drag', onDrag);

let startTime;
logo.addEventListener('mousedown', () => {
  startTime = Date.now();
});

logo.addEventListener('mouseup', () => {
  console.log(((Date.now() - startTime) / 1000).toFixed(2));
});
