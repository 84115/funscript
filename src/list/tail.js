import index from '../list/index'
import slice from '../list/slice'

export default array => index(slice(array)(-1))(0)
