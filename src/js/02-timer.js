// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

const timer = document.querySelectorAll('.value');
const selector = document.querySelector('#datetime-picker');
const button = document.querySelector('button');

button.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const dateNow = new Date();
    if (selectedDates[0] < dateNow) {
      window.alert('Please choose a date in the future');
    } else {
      button.disabled = false;
    }
  },
};

flatpickr(selector, options);

button.addEventListener('click', onClickBtn);

function onClickBtn() {
  const selectedDate = selector._flatpickr.selectedDates[0];
  timerId = setInterval(() => {
    updateTimer(selectedDate);
  }, 1000);
  button.disabled = true;
}

function updateTimer(selectedDate) {
  const ms = selectedDate.getTime() - Date.now();
  const { days, hours, minutes, seconds } = convertMs(ms);

  timer[0].textContent = days;
  timer[1].textContent = hours;
  timer[2].textContent = minutes;
  timer[3].textContent = seconds;

  if (ms > 0 && ms < 1000) {
    clearInterval(timerId);
    alert('Time is up!');
  }
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
