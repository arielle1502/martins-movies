// the movies component maps over the api data and passes the props to the MovieItem component
import React, {Component, Fragment} from 'react';
import MovieItem from './MovieItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types'

//redux
import { connect } from 'react-redux';
import { getMovies } from '../../redux/actions/movieActions'
import {addToWatched} from '../../redux/actions/movieActions'


class Movies extends Component {


  componentDidMount(){
    this.props.getMovies();
    console.log('getting movies')
  }
  
  addToWatched = (movie) => {
    this.props.addToWatched(movie);
    console.log('added to wacth')
  }
render(){

  const { movies, loading } = this.props;
   
  return (
            <div style={userStyle}>
            {movies.map(movie =>
                <MovieItem key={movie.id} markedWatched={ this.props.markedWatched == true}  watched={this.addToWatched} movie={movie}/>
            )}
        </div>
        )
    }
        
    }
  

// Movies.propTypes={
//     movies: PropTypes.array.isRequired,
//     loading: PropTypes.bool.isRequired
// }

const userStyle={
    display:'grid',
    gridTemplateColumns:'repeat(2, 1fr)',
    gridGap:'1rem',
    paddingTop: '3rem',
   
}
const mapStateToProps = (state) => ({
  movies: state.search.movies,
  watched: state.search.watched
})

const mapDispatchToProps = (dispatch) => {
  return{
    addToWatched:(movie) => {
      dispatch(addToWatched(movie))
      
    },
    getMovies: ()=> dispatch(getMovies())
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)

