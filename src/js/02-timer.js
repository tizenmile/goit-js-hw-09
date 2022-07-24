// const flatpickr = require('flatpickr');
import flatpickr from 'flatpickr';
import { Ukrainian } from 'flatpickr/dist/l10n/uk';

const datePicker = document.querySelector('#datetime-picker');
// flatpickr(datePicker, {});

flatpickr(datePicker, {
  enableTime: true,
  dateFormat: 'Y-m-d H:i',
  locale: Ukrainian,
});
