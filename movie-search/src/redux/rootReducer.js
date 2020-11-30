import { membersReducer } from './members/membersReducer'
import { combineReducers } from 'redux'




const rootReducer = combineReducers({
    membersReducer: membersReducer
})

export default rootReducer