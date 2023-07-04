let intervalID;
const btnStart = document.getElementById('start');
const btnStop = document.getElementById('stop');

function startChange() {
  if (!intervalID) {
    intervalID = setInterval(changeColor, 1000);
  }
}

function stopChange() {
  clearInterval(intervalID);
}

function changeColor() {
  document.body.style.background = `rgb(${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
}

btnStart.addEventListener('click', startChange);
btnStop.addEventListener('click', stopChange);
