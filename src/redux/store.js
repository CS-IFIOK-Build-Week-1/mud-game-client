import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import playerReducer from '../components/player/reducer';
import mapReducer from '../components/map/reducer';

const rootReducer = combineReducers({
  player: playerReducer,
  map: mapReducer,
});

const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
);

export default store;