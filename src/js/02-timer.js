import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
    input: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('button[data-start]'),
    daysEl: document.querySelector('[data-days]'),
    hoursEl: document.querySelector('[data-hours]'),
    minutesEl: document.querySelector('[data-minutes]'),
    secondsEl: document.querySelector('[data-seconds]'),
};

refs.startBtn.disabled = true;
let selectedDate = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const currentDate = new Date();
        if (selectedDates[0] - currentDate >= 0) {
            refs.startBtn.disabled = false;
            selectedDate = selectedDates[0];
        } else {
           Notiflix.Notify.failure('Please choose a date in the future');
           refs.startBtn.disabled = true;
        }
    },
};

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

const timer = {
    intervalId: null,
    isActive: false,
    start() {
        if (this.isActive) {
            return;
        }
        
        this.isActive = true;
        this.intervalId = setInterval(() => {
            const currentDate = new Date();
            const deltaTime = selectedDate - currentDate;
            
        if (deltaTime > 0) {
            const { days, hours, minutes, seconds } = convertMs(deltaTime);
            refs.daysEl.textContent = addLeadingZero(days);
            refs.hoursEl.textContent = addLeadingZero(hours);
            refs.minutesEl.textContent = addLeadingZero(minutes);
            refs.secondsEl.textContent = addLeadingZero(seconds);           
        } else {
            clearInterval(this.intervalId);
            this.isActive = false;
        }
    }, 1000);
},
};

refs.startBtn.addEventListener("click", () => {
    timer.start();
});

flatpickr('#datetime-picker', options);

function convertMs(ms) {

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};