
import React, {Component} from 'react';
import { actionTypes } from 'react-redux-firebase';
import {addToWatched} from '../../redux/actions/movieActions'

class Watched extends Component {

addToWatched = (movie) => {
  this.props.addToWatched(movie);
}

    render(){
      let watchedMovie = watched.find(watchedMovie=> watchedMovie.movie == actionTypes.payload.movie)
      if(watchedMovie) {
        console.log('wacthed')
      }
        return (
             <div>
                 
             </div>
        )
    }
}

const mapStateToProps = (state) =>{
  return{
    watched: state.watched
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addToWatched:(movie => {
      dispatch(addToWatched(movie))
    })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Watched)