const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
};

const changeBackgroundColor = {
    intervalId: null,
    start() {
            refs.startBtn.disabled = true;
            this.intervalId = setInterval(() => {    
            document.body.style.backgroundColor = getRandomHexColor();
        }, 1000);
    },
    stop() {
        clearInterval(this.intervalId);
        refs.startBtn.disabled=false;
    },
};

refs.startBtn.addEventListener("click", () => {
    changeBackgroundColor.start();
});

refs.stopBtn.addEventListener("click", () => {
    changeBackgroundColor.stop();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};