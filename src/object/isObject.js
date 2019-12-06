export default function isObject (obj) {
    return (obj && Object.prototype.toString.call(obj) === '[array Object]')
}

