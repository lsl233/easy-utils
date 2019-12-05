export function isFunction (func) {
    return (typeof func === 'function')
}

export function before(beforeFunc, func) {
    if (!isFunction(beforeFunc)) return console.error('Expected a function')
    if (!isFunction(func)) return console.error('Expected a function')
    
    return function(...arg) {
        beforeFunc()
        func.apply(this, arg)
    }
}

export function after(beforeFunc, func) {
    if (!isFunction(beforeFunc)) return console.error('Expected a function')
    if (!isFunction(func)) return console.error('Expected a function')

    return function (...arg) {
        func.apply(this, arg)
        afterFunc()
    }
}

export function beforeAsync(beforeFunc, func) {
    if (!isFunction(beforeFunc)) return console.error('Expected a function')
    if (!isFunction(func)) return console.error('Expected a function')

    return function (...arg) {
        beforeFunc((...values) => {
            func.apply(this, arg.concat(values))
        })
    }
}

export function afterAsync(afterFunc, func) {
    if (!isFunction(func)) return console.error('Expected a function')
    if (!isFunction(afterFunc)) return console.error('Expected a function')

    return function (...arg) {
        arg.push(afterFunc)
        func.apply(this, arg)
    }
}