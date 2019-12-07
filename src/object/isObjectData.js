import getType from './getType'

export default function isObjectData (value) {
    return getType(value) === '[object Object]'
}
