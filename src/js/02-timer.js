// const flatpickr = require('flatpickr');
import flatpickr from 'flatpickr';
import { Ukrainian } from 'flatpickr/dist/l10n/uk';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const datePicker = document.getElementById('datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const dataDays = document.querySelector('span[data-days]');
const dataHours = document.querySelector('span[data-hours]');
const dataMinutes = document.querySelector('span[data-minutes]');
const dataSeconds = document.querySelector('span[data-seconds]');

startBtn.disabled = true;

flatpickr(datePicker, {
  enableTime: true,
  dateFormat: 'Y-m-d H:i',
  locale: Ukrainian,
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (new Date() > selectedDates[0]) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
      startBtn.addEventListener('click', () => {
        const updateDate = setInterval(function update() {
          const dateDiff = convertMs(new Date(selectedDates[0]) - new Date());
          startBtn.disabled = true;
          dataDays.textContent = dateDiff.days.toString().padStart(2, '0');
          dataHours.textContent = dateDiff.hours.toString().padStart(2, '0');
          dataMinutes.textContent = dateDiff.minutes
            .toString()
            .padStart(2, '0');
          dataSeconds.textContent = dateDiff.seconds
            .toString()
            .padStart(2, '0');
          if (new Date() >= new Date(selectedDates[0]) - 1000) {
            clearInterval(updateDate);
            startBtn.disabled = false;
            Notiflix.Notify.success('Timer is up!');
          }
        }, 1000);
      });
    }
  },
});

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
