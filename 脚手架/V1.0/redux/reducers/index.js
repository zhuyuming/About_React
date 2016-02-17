import { combineReducers } from 'redux'
import {routeReducer, UPDATE_LOCATION} from 'redux-simple-router'
import todos from './todos'

import redux_main from '../../modules/main/redux'

let items = redux_main.reducer.items;


/*路由变化，派发的事件*/
function update(state = "update", action) {
    switch (action.type) {
        case UPDATE_LOCATION:
            return 'update'
        default:
            return state
    }
}

// 合并事件处理的函数
const rootReducer = combineReducers({
    items,
    todos,
    update,
    routing: routeReducer,
})

export default rootReducer
