function memoize(f) {

    const memory = new Map();

    return function(arg) {

        let result;

        if (!memory.has(arg)) {
            result = f(arg);
            memory.set(arg, result);
        } else {
            result = memory.get(arg);
        }

        return result;
    };
}
function fn(arg) {
    console.log(arg);
    return 2 * arg;
}
var m_fn = memoize(fn);
console.log(m_fn(18));
console.log(m_fn(18));
console.log(m_fn(20));
console.log(m_fn(20));