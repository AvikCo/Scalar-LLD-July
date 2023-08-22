const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The first promise has rejected');
        reject(10);
    }, 1 * 1000);

});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The second promise has resolved');
        resolve(20);
    }, 2 * 1000);
});


Promise.race([p1, p2])
    .then(value => console.log(`Resolved: ${value}`))
    .catch(reason => console.log(`Rejected: ${reason}`));


    https://www.javascripttutorial.net/es6/javascript-promise-race/