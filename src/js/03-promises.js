import Notiflix from 'notiflix';
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const dataForm = new FormData(form);
  loopPromise(dataForm);
  form.reset()
});

function loopPromise(dataForm) {
  const dataFromForm = {};
  for (const [key, value] of dataForm.entries()) {
    dataFromForm[key] = Number(value);
    for (let i = 1; i <= dataFromForm.amount; i++) {
      createPromise(i, dataFromForm.delay)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          );
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`
          );
        });
      dataFromForm.delay = dataFromForm.delay + dataFromForm.step;
    }
  }
}
