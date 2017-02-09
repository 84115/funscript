import each from '../list/each'

export default (...args) => {
	let number = 0

	each(args)(arg => number += arg)

	return number }
