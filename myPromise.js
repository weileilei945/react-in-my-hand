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
    onFulfilledCallback = Object.create(null);

    // 失败回调集合
    onRejectedCallback = Object.create(null);

    resolve = (value) => {
        if (this.status === PENDING) {
            this.status = FULFFILLED;
            this.value = value;
            this.onFulfilledCallback && this.onFulfilledCallback(value);
        }
    }

    rejected = (reason) => {
        if (this.status === PENDING) {
            this.status = REJECTED;
            this.reason = reason;
            this.onRejectedCallback && this.onRejectedCallback(reason);
        }
    }

    then = (onFulfilled, onRejected) => {
        if (this.status === FULFFILLED) {
            onFulfilled(this.value);
        }
        else if (this.status === REJECTED) {
            onRejected(this.reason)
        }
        else if (this.status === PENDING) {
            this.onFulfilledCallback = onFulfilled;
            this.onRejectedCallback = onRejected;
        }
    }
}

module.exports = MyPromise;