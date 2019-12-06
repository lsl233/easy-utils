(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.easyUtils = {}));
}(this, (function (exports) { 'use strict';

    function isFunction (func) {
        return (typeof func === 'function')
    }

    function before(beforeFunc, func) {
        if (!isFunction(beforeFunc)) return console.error('Expected a function')
        if (!isFunction(func)) return console.error('Expected a function')
        
        return function(...arg) {
            beforeFunc();
            func.apply(this, arg);
        }
    }

    function after(beforeFunc, func) {
        if (!isFunction(beforeFunc)) return console.error('Expected a function')
        if (!isFunction(func)) return console.error('Expected a function')

        return function (...arg) {
            func.apply(this, arg);
            afterFunc();
        }
    }

    function beforeAsync(beforeFunc, func) {
        if (!isFunction(beforeFunc)) return console.error('Expected a function')
        if (!isFunction(func)) return console.error('Expected a function')

        return function (...arg) {
            beforeFunc((...values) => {
                func.apply(this, arg.concat(values));
            });
        }
    }

    function afterAsync(afterFunc, func) {
        if (!isFunction(func)) return console.error('Expected a function')
        if (!isFunction(afterFunc)) return console.error('Expected a function')

        return function (...arg) {
            arg.push(afterFunc);
            func.apply(this, arg);
        }
    }

    function isObject (obj) {
        return (Object.prototype.toString.call(obj) === '[object Object]')
    }

    function isArray (arr) {
        return Array.isArray(arr)
    }

    function range (start, end, step = 1) {
        let index = -1;
        let length = end - start;
        const result = new Array(length);
        length += 1;

        while(length--) {
            result[++index] = start;
            start += step;
        }

        return result
    }

    exports.after = after;
    exports.afterAsync = afterAsync;
    exports.before = before;
    exports.beforeAsync = beforeAsync;
    exports.isArray = isArray;
    exports.isFunction = isFunction;
    exports.isObject = isObject;
    exports.range = range;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
