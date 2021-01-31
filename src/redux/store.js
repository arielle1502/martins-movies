import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer, createTransform  } from 'redux-persist' // imports from redux-persist
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { composeWithDevTools } from 'redux-devtools-extension';
import ADD_TO_WATCHED from './reducers/searchReducer'

import thunk from 'redux-thunk';

import searchReducer from './reducers/searchReducer';
import moviesReducer from './reducers/moviesReducer';


const initialState = {};

const middleware = [thunk];

const whiteList = createTransform(
  (inboundState, key) => {
    if (key === "movies") {
      // This is saving to storage
      // Save only the counter field for second reducer
      return inboundState.watched;
    }
    return inboundState;
  },
  (outBoundState, key) => {
    if (key === "movies") {
      // Receiving data from storage
      // add the saved counter field in reducer object
      return {
        name: "",
        watched: outBoundState
      };
    }
    return outBoundState;
  }
);

const persistConfig = { // configuration object for redux-persist
  key: 'primary',
  storage, // define which storage to use,
  whitelist:['movies'],
  // transforms: [whiteList]
}


const reducers = combineReducers({
  search: searchReducer,
  movies:moviesReducer
});

const persistedReducer = persistReducer(persistConfig, reducers) // create a persisted reducer

const store = createStore(persistedReducer, 
  composeWithDevTools(applyMiddleware(thunk)));
const  persistor = persistStore(store); // used to create the persisted store, persistor will be used in the next step
export {store, persistor}
