const MyPromise = require('./myPromise');
const promise = new MyPromise((resolve, rejected) => {
    setTimeout(() => {
        resolve('success')
    }, 2000)
});

promise.then(resolve => {
    console.log(resolve, 'resolve');
}, reason => {
    console.log(reason, 'reason')
});