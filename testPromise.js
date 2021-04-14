const MyPromise = require('./myPromise');
const promise = new MyPromise((resolve, rejected) => {
    setTimeout(() => {
        resolve('success')
    }, 2000)
});

// promise.then(resolve => {
//     console.log(resolve, 'resolve');
// }, reason => {
//     console.log(reason, 'reason')
// });

// promise.then(resolve => {
//     console.log(1);
// });

// promise.then(resolve => {
//     console.log(2);
// });

// promise.then(resolve => {
//     console.log(3);
// });

function other () {
    return new MyPromise((resolve, reject) =>{
        resolve('other')
    })
}
promise.then(value => {
    console.log(1)
    console.log('resolve', value)
    return other()
}).then(value => {
    console.log(2)
    console.log('resolve', value)
})
 