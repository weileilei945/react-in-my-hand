const PENDING = 'pending';

const FULFFILLED = 'fulefilled';

const REJECTED = 'rejected';


class MyPromise {
    constructor(executor) {
        executor(this.resolve, this.rejected);
    }
    
    // 状态值
    status = PENDING;

    // 成功结果
    value = Object.create(null);

    // 失败结果
    reason = Object.create(null);

    // 成功回调集合
    onFulfilledCallback = [];

    // 失败回调集合
    onRejectedCallback = [];

    resolve = (value) => {
        if (this.status === PENDING) {
            this.status = FULFFILLED;
            this.value = value;
            // this.onFulfilledCallback && this.onFulfilledCallback(value);
        }
        while (this.onFulfilledCallback.length) {
            this.onFulfilledCallback.shift()(value)
        }
    }

    rejected = (reason) => {
        if (this.status === PENDING) {
            this.status = REJECTED;
            this.reason = reason;
            // this.onRejectedCallback && this.onRejectedCallback(reason);
        }
        while (this.onRejectedCallback.length) {
            this.onRejectedCallback.shift()(reason)
        }
    }

    then = (onFulfilled, onRejected) => {
        const promise2 = new MyPromise((resolve, reject) => {
            if (this.status === FULFFILLED) {
                const x = onFulfilled(this.value);
                resolvePromise(x, resolve, reject)
            }
            else if (this.status === REJECTED) {
                onRejected(this.reason)
            }
            else if (this.status === PENDING) {
                // 储存所需回调
                this.onFulfilledCallback.push(onFulfilled);
                this.onRejectedCallback.push(onRejected);
            }
        });
        // if (this.status === FULFFILLED) {
        //     onFulfilled(this.value);
        // }
        // else if (this.status === REJECTED) {
        //     onRejected(this.reason)
        // }
        // else if (this.status === PENDING) {
        //     // 储存所需回调
        //     this.onFulfilledCallback.push(onFulfilled);
        //     this.onRejectedCallback.push(onRejected);
        // }

        // .then之后是个新的promise
        return promise2;
    }
}

// x其实应该用result 但是看起来一堆r开头的单词 有点混乱
function resolvePromise(x, resolve, reject) {
    // 判断x是不是MyPromise的实例
    if (x instanceof MyPromise) {
        // 如果是是实例 那么状态要正常流转
        x.then(resolve, reject);
    }
    else {
        // 如果发现是个结果，那么直接往后走
        resolve(x);
    }
}
module.exports = MyPromise;