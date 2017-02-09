import list from '../list/list'
import length from '../list/length'

export default (...args) => {
    let items = []


    for (var i = 0, len = length(args); i < len; i++)
        items.push(args[i])


    return items
}
