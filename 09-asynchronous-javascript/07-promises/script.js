// // Create a promise
// const promise = new Promise((resolve, reject) => {
//   // Do some async task
//   setTimeout(() => {
//     console.log('Async task complete');
//     resolve();
//   }, 1000);
// });

// promise.then(() => {
//   console.log('Promise consumed...');
// });

const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;

    if (!error) {
      resolve({ name: 'John', age: 30 });
    } else {
      reject('Error: Something went wrong');
    }
  }, 1000);
});

getUser
  .then((user) => console.log(user))
  .catch((error) => console.log(error))
  .finally(() => console.log('The promise has been resolved or rejected'));

console.log('Hello from global scope');

const myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      resolve('Siker! Az eredmény: ' + randomNumber);
    } else {
      reject('Hiba! Az eredmény: ' + randomNumber);
    }
  }, 1000);
});

myPromise
  .then(function (result) {
    console.log('Sikeres:', result);
  })
  .catch(function (error) {
    console.error('Hiba:', error);
  });
