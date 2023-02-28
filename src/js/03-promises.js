import Notiflix from 'notiflix';

const form = document.querySelector('.form');
form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  let delay = Number(form.delay.value);
  const step = Number(form.step.value);
  const amount = Number(form.amount.value);
  
  for (let i = 0; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  }
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};