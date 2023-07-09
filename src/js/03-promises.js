import { Notify } from 'notiflix/build/notiflix-notify-aio';

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
}

const btn = document.querySelector('button');
const form = document.querySelector('.form');

form.addEventListener('input', inputListener);

let formValue = {};

function inputListener(e) {
  formValue[e.target.name] = e.target.value;
}

btn.addEventListener('click', onSubmitBtn);

function onSubmitBtn(e) {
  e.preventDefault();
  const { amount, delay, step } = formValue;
  let currentDelay = parseInt(delay);
  for (let i = 1; i < amount; i++) {
    createPromise(i, currentDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    currentDelay += parseInt(step);
  }
}
