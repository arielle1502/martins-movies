import {ADD_TO_WATCHED } from '../types.js';

const initialState = {
  
    watched: [],  
};

//watched reducer turns the first element into an array and then concats the following 'watched' selections to the array
export default function movieReducer(state = initialState, action){
  switch (action.type) {

          case ADD_TO_WATCHED:
            
            return{
              ...state,
              watched: Object.values(state.watched).concat(action.payload)
            }
            

      default:
        return state;
  }
}