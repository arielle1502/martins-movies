import {
  GET_MOVIES,
  SEARCH_MOVIES
 
} from '../types.js';

const initialState = {
    movies : [],
    movie:{},
    alert: null
  
};

//Both reducers just take the current state and then replace it
export default function searchReducer(state = initialState, action){
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,

      }
        case SEARCH_MOVIES:
          return {
            ...state,
            movies: action.payload,
          }

      default:
        return state;
  }
}