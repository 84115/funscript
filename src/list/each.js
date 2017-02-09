import apply from '../core/apply'
import length from '../list/length'
import list from '../list/list'

export default items => method => {
    for (var i = 0, len = length(items); i < len; i++)
        apply(method)(list(items[i])) }
