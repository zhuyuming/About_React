import { combineReducers } from 'redux'
import {routeReducer, UPDATE_LOCATION} from 'redux-simple-router'
import todos from './todos'

function update(state="update", action) {
    console.log('update==>',state,action)
    switch(action.type) {
        case UPDATE_LOCATION:
            return 'update'
        default:
            return state
    }
}

const rootReducer = combineReducers({
  todos,
  update,
  routing: routeReducer
})

export default rootReducer
