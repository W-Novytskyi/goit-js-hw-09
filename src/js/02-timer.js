import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    input: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('button[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
};

refs.startBtn.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const currentDate = new Date();
        if (selectedDates[0] - currentDate >= 0) {
           refs.startBtn.disabled = false;
        } else {
           window.alert('Please choose a date in the future');
           refs.startBtn.disabled = true;
        }
  },
};

const timer = {
    intervalId: null,
    isActive: false,
    start() {
        if (this.isActive) {
            return;
        }
        
        let selectedDates = null;
        this.isActive = true;

        this.intervalId = setInterval(() => {
            const currentDate = new Date();
                      
        const deltaTime = selectedDates - currentDate;

        
        if (deltaTime > 0) {
            const { days, hours, minutes, seconds } = convertMs(deltaTime);
            refs.days.textContent = days;
            refs.hours.textContent = hours;
            refs.minutes.textContent = minutes;
            refs.seconds.textContent = seconds;
            
            console.log(selectedDates - currentDate);
            
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



// function addLeadingZero(value) {
// return string(value).padStart(2, '0');
// };

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