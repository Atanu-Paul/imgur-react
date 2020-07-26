import { combineReducers } from 'redux'
//All reducers
import videoReducer from './reducers/videoReducer'
import userReducer from './reducers/userReducer'

const rootReducer = combineReducers({
    videoState: videoReducer,
    userState: userReducer
})

export default rootReducer;