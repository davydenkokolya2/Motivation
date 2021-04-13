function curry(fn) {
    return function curried() {
        const args = Array.prototype.slice.call(arguments)
        const done = args.length >= fn.length
        if (done) {
            return fn.apply(this, args)
        } else {
            return function () {
                const args2 = Array.prototype.slice.call(arguments)
                return curried.apply(this, args.concat(args2))
            }
        } 
    }
}

function sum(a, b, c) {
    return a + b + c;
}

var add = curry(sum);
alert(add(2)(3)(4));