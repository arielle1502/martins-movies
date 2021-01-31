import {
  ADD_TO_WATCHED
 
} from '../types.js';

const initialState = {
  
    watched: {},
    
  
};

export default function searchReducer(state = initialState, action){
  switch (action.type) {

          case ADD_TO_WATCHED:
            
            return{
              ...state,
              watched:state.watched.concat(action.payload)
            };

      default:
        return state;
  }
}