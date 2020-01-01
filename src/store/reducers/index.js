import apiReducer from './api'
import { combineReducers } from 'redux'
import videoReducer from './video'
export default combineReducers({
    api: apiReducer,
    videos: videoReducer
})
