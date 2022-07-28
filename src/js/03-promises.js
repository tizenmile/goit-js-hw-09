function createPromise(position, delay) {
  return new Promise((fulfit, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      // Fulfill
    } else {
      // Reject
    }
  });
}
const inputDelay = document.getElementsByName('delay');
const inputStep = document.getElementsByName('step');
const inputAmount = document.getElementsByName('amount');
const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const dataForm = new FormData(form);
  console.log(dataForm.delay);
  createPromise(2, 1500)
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
});
