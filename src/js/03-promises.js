function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
const inputDelay = document.getElementsByName('delay');
const inputStep = document.getElementsByName('step');
const inputAmount = document.getElementsByName('amount');
const submitBtn = document.querySelector('.button');

submitBtn.addEventListener('submit', event => {
  console.log(event.cancelable);
  event.preventDefault();
  createPromise(inputDelay, inputAmount);
});
