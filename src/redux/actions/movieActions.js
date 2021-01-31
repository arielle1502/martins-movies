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
  axios.get('https://api.themoviedb.org/3/movie/popular?api_key=1e448e0dfcdbb565f5d329820065b4d2&language=en-US&page=1')
  .then(res => {
    dispatch({
      type: GET_MOVIES,
      payload: res.data.results
    })
    
    })
  }

  export const searchMovies = (text) => dispatch => {
    // dispatch({ type: LOADING_DATA });
    axios.get(`https://api.themoviedb.org/3/search/multi?api_key=1e448e0dfcdbb565f5d329820065b4d2&language=en-US&query=${text}&page=1&include_adult=false`)
    .then(res => {
      dispatch({
        type: SEARCH_MOVIES,
        payload: res.data.results
      })
      
    })}


    export const addToWatched = (id) => {
      return{
        type: ADD_TO_WATCHED,
        payload: {
          id
        }
      }
    }

    export const filterToFrench = () => dispatch => {
      // dispatch({ type: LOADING_DATA });
      axios.get('http://api.themoviedb.org/3/discover/movie?api_key=1e448e0dfcdbb565f5d329820065b4d2&language=fr')
      .then(res => {
        dispatch({
          type: GET_MOVIES,
          payload: res.data.results
        })
        
        })
      }

      export const filterToItalian = () => dispatch => {
        // dispatch({ type: LOADING_DATA });
        axios.get('http://api.themoviedb.org/3/discover/movie?api_key=1e448e0dfcdbb565f5d329820065b4d2&language=it')
        .then(res => {
          dispatch({
            type: GET_MOVIES,
            payload: res.data.results
          })
          
          })
        }
        export const filterToSpanish = () => dispatch => {
          // dispatch({ type: LOADING_DATA });
          axios.get('http://api.themoviedb.org/3/discover/movie?api_key=1e448e0dfcdbb565f5d329820065b4d2&language=es')
          .then(res => {
            dispatch({
              type: GET_MOVIES,
              payload: res.data.results
            })
            
            })
          }

          export const filterToMandarin = () => dispatch => {
            // dispatch({ type: LOADING_DATA });
            axios.get('http://api.themoviedb.org/3/discover/movie?api_key=1e448e0dfcdbb565f5d329820065b4d2&language=zh')
            .then(res => {
              dispatch({
                type: GET_MOVIES,
                payload: res.data.results
              })
              
              })
            }

            