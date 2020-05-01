import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import playerReducer from '../components/player/reducer'

const rootReducer = combineReducers({
  playerState: playerReducer,
})

const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
)

export default store