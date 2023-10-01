const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Promise 1 rejected');
    reject('error');
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Promise 2 rejected');
    reject(2);
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Promise 3 resolved');
    resolve(3);
  }, 5000);
});


const p = Promise.any([p1, p2,p3]);
p.then((value) => {
  console.log('Returned Promise');
  console.log(value);
});

https://www.javascripttutorial.net/es-next/javascript-promise-any/