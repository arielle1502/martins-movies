import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import searchReducer from './reducers/searchReducer';
import moviesReducer from './reducers/moviesReducer';


const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  search: searchReducer,
  movies: moviesReducer
});

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;