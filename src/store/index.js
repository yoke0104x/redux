import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import data from './car.reducer'
import logger from 'redux-logger'
const store = createStore(combineReducers({
    data
}),applyMiddleware(thunk,logger))

export default store
