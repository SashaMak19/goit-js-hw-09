const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');

let timerId = null;

startBtn.addEventListener('click', () => {
  timerId = setInterval(onStartView, 1000);
});

stopBtn.addEventListener('click', onStopView);

function onStartView(e) {
  startBtn.setAttribute('disabled', true);
  stopBtn.removeAttribute('disabled');
  body.style.backgroundColor = `${getRandomHexColor()}`;
  console.log('hello from onStart');
}

function onStopView() {
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', true);
  startBtn.removeEventListener('click', onStartView);
  clearInterval(timerId);
  console.log('hello from onStop');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
