function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const button = document.querySelectorAll('button');
const startBtn = button[0];
const stopBtn = button[1];

startBtn.addEventListener('click', onStartButton);

function onStartButton() {
  const timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.disabled = true;

  stopBtn.addEventListener('click', () => {
    clearInterval(timerId);
    startBtn.disabled = false;
  });
}
