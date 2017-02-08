import list from '../list/list';
import length from '../core/length';

export default (...args) => {
  let items = []


  for (var i = 0, len = length(args); i < len; i++) items.push(args[i])


  return items
}
