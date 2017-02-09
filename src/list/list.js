import list from '../list/list'
import push from '../list/push'
import index from '../list/index'
import length from '../list/length'

export default (...args) => {
    let items = []

    for(var i = 0, len = length(args); i < len; i++)
    	push(items)(index(args)(i))

    return items }
