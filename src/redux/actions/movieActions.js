import {
  GET_MOVIES,
  SEARCH_MOVIES,
  ADD_TO_WATCHED,
  GET_MOVIE_DETAILS
} from '../types.js';
import axios from 'axios';


// getMovies() loads the popular movies from the api and dispatches it to the 'movies' state
export const getMovies = () => dispatch => {
  axios.get('https://api.themoviedb.org/3/movie/popular?api_key=1e448e0dfcdbb565f5d329820065b4d2&language=en-US&page=1&append_to_response=imdb_id')
  .then(res => {
    dispatch({
      type: GET_MOVIES,
      payload: res.data.results
    })
    
    })
  }

  //searchMovies() take the text from the local state as a parameter and places it in the mutli search keyword query
  export const searchMovies = (text) => dispatch => {
    axios.get(`https://api.themoviedb.org/3/search/multi?api_key=1e448e0dfcdbb565f5d329820065b4d2&language=en-US&query=${text}&page=1&include_adult=false`)
    .then(res => {
      dispatch({
        type: SEARCH_MOVIES,
        payload: res.data.results
      })
      
    })}

    //addToWatched() takes the id of the movie that was clicked and dispatches it to the 'watched' state
    export const addToWatched = (id) => {
      return{
        type: ADD_TO_WATCHED,
        payload: {
          id
        }
      }
    }
// filterToFrench() loads all of the french language movies from the api and dispatches it to the 'movies' state
    export const filterToFrench = () => dispatch => {
      axios.get('http://api.themoviedb.org/3/discover/movie?api_key=1e448e0dfcdbb565f5d329820065b4d2&language=fr')
      .then(res => {
        dispatch({
          type: GET_MOVIES,
          payload: res.data.results
        })
        
        })
      }
// filterToItalian() loads all of the italian language movies from the api and dispatches it to the 'movies' state
      export const filterToItalian = () => dispatch => {
        axios.get('http://api.themoviedb.org/3/discover/movie?api_key=1e448e0dfcdbb565f5d329820065b4d2&language=it')
        .then(res => {
          dispatch({
            type: GET_MOVIES,
            payload: res.data.results
          })
          
          })
        }
        // filterToSpanish() loads all of the spanish language movies from the api and dispatches it to the 'movies' state
        export const filterToSpanish = () => dispatch => {
          axios.get('http://api.themoviedb.org/3/discover/movie?api_key=1e448e0dfcdbb565f5d329820065b4d2&language=es')
          .then(res => {
            dispatch({
              type: GET_MOVIES,
              payload: res.data.results
            })
            
            })
          }
          // filterToMandarin() loads all of the manadrin language movies from the api and dispatches it to the 'movies' state
          export const filterToMandarin = () => dispatch => {
            axios.get('http://api.themoviedb.org/3/discover/movie?api_key=1e448e0dfcdbb565f5d329820065b4d2&language=zh')
            .then(res => {
              dispatch({
                type: GET_MOVIES,
                payload: res.data.results
              })
              
              })
            }
