import { combineReducers } from 'redux'

export default combineReducers({
    ads:function(state, action){
        if(!state){
            return []
        }
        return action.payload
    }
})