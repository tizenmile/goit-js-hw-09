function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
stopBtn.disabled = true;
let intervalToChangeColor;
startBtn.onclick = () => {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  intervalToChangeColor = setInterval(changeColor, 1000);
  changeColor();
};

function changeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  stopBtn.addEventListener('click', event => {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    clearInterval(intervalToChangeColor);
  });
}
