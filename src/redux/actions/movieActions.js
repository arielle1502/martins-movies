import {
  GET_MOVIES,
  SEARCH_MOVIES,
  LOADING_DATA,
  ADD_TO_WATCHED
} from '../types.js';
import axios from 'axios';

// we are not passing through a paramenter but we are passing through the dispacth function so we need a double arrow function
// export const getMovies = () => async dispatch => {
//   // dispatch({ type: LOADING_DATA });
//   const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=1e448e0dfcdbb565f5d329820065b4d2&language=en-US&page=1');
//   dispatch({
//     type: GET_MOVIES,
//     payload: res.data
//   })
// }
export const getMovies = () => dispatch => {
  // dispatch({ type: LOADING_DATA });
  axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=1e448e0dfcdbb565f5d329820065b4d2&language=en-US&page=1')
  .then(res => {
    dispatch({
      type: GET_MOVIES,
      payload: res.data.results
    })
    
  })}

  export const searchMovies = (text) => dispatch => {
    // dispatch({ type: LOADING_DATA });
    axios.get(`https://api.themoviedb.org/3/search/multi?api_key=1e448e0dfcdbb565f5d329820065b4d2&language=en-US&query=${text}&page=1&include_adult=false`)
    .then(res => {
      dispatch({
        type: SEARCH_MOVIES,
        payload: res.data.results
      })
      
    })}


    export const addToWatched = (movie) => {
      return{
        type: ADD_TO_WATCHED,
        payload: {
          movie
        }
      }
    }

  
