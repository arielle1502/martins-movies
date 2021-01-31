import {
  GET_MOVIES,
  LOADING_DATA,
  SEARCH_MOVIES,
 
} from '../types.js';

const initialState = {
    movies : [],
    movie:{},
    loading: false, 
    alert: null
  
};

export default function searchReducer(state = initialState, action){
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading:false
      };

      case LOADING_DATA:
        return {
          ...state,
          loading:true
        };

        case SEARCH_MOVIES:
          return {
            ...state,
            movies: action.payload,
            loading:false
          };

      default:
        return state;
  }
}