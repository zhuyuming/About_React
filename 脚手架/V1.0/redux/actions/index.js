import todos from './todos'
import test from './test'
import redux_main from '../../modules/main/redux'

export default Object.assign({}, todos, test,redux_main.action)
