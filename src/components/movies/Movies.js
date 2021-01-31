// the movies component maps over the api data and passes the props to the MovieItem component. 6 functions, 4 replace the 'movies' with a language filtered api call. getMovies() loads all of the popular movies. addedToWatched() is passed down the MovieItem child component. IT purpose is to mark the users 'watched' selection and persist the selection on page refesh.
import React, {Component, Fragment} from 'react';
import MovieItem from './MovieItem';

//redux
import { connect } from 'react-redux';
//general functions
import { getMovies } from '../../redux/actions/movieActions'
import {addToWatched} from '../../redux/actions/movieActions'
// filtering functions
import { filterToFrench } from '../../redux/actions/movieActions'
import { filterToItalian } from '../../redux/actions/movieActions'
import { filterToSpanish } from '../../redux/actions/movieActions'
import { filterToMandarin } from '../../redux/actions/movieActions'

class Movies extends Component {
  
    filterToFrench = (e) => {
      e.preventDefault();
  
      this.props.filterToFrench()
      console.log('movies filtered')
    }
    filterToItalian = (e) => {
      e.preventDefault();
  
      this.props.filterToItalian()
      console.log('movies filtered')
  
    }
    filterToSpanish = (e) => {
      e.preventDefault();
  
      this.props.filterToSpanish()
      console.log('movies filtered')
  
    }
    filterToMandarin = (e) => {
      e.preventDefault();
  
      this.props.filterToMandarin()
      console.log('movies filtered')
  
    }
    getMovies = (e) =>{
      e.preventDefault();
  
      this.props.getMovies()
    }

  componentDidMount(){
    this.props.getMovies();
  }
  
  addToWatched = (id) => {
  
    this.props.addToWatched(id);
    console.log('added to wacth')
  }
render(){

  const { movies} = this.props;
   
  return (
    <Fragment>
      <div className="container-movies">
      <div class="dropdown-language show">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Browse By Language
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a onClick={this.filterToFrench} class="dropdown-item" href="#">French</a>
    <a onClick={this.filterToItalian} class="dropdown-item" href="#">Italian</a>
    <a onClick={this.filterToSpanish} class="dropdown-item" href="#">Spanish </a>
    <a onClick={this.filterToMandarin} class="dropdown-item" href="#">Mandarin</a>
    <a onClick={this.getMovies} class="dropdown-item" href="#">English</a>
  </div>
</div>
      
            <div className="movies" style={userStyle}>
            {movies.map(movie =>
                <MovieItem key={movie.id} addToWatched={this.addToWatched} movie={movie}/>
            )}
        </div>
        </div>
        </Fragment>
        )
    }
        
    }

const userStyle={
    display:'grid',
    gridTemplateColumns:'repeat(3, 1fr)',
    gridGap:'3rem',
    paddingTop: '3rem',
   
}
const mapStateToProps = (state) => ({
  movies: state.search.movies,
  watched: state.movies.watched
})

const mapDispatchToProps = (dispatch) => {
  return{
    addToWatched:(id) => {
      dispatch(addToWatched(id))
    },
    getMovies: ()=> dispatch(getMovies()),
    filterToFrench: ()=> dispatch(filterToFrench()),
    filterToItalian: ()=> dispatch(filterToItalian()),
    filterToSpanish: ()=> dispatch(filterToSpanish()),
    filterToMandarin: ()=> dispatch(filterToMandarin())
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)

