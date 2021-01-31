// the MovieItem component takes props and loads them into the UI for the cards that load on the homepage. It calls one functions: addToWatched(), which takes in the movie's ids as a paramter and dispatches it to the state. The 'watched' state is update with the new id and that array of id's is persisted into local storage. Users can click the watched button and it will stay clicked on refresh.

import React, {Component} from 'react';
import { connect } from 'react-redux';
import genreData from '../../data/genres.json'

class MovieItem extends Component {

// Function: takes the movie's id and updates the 'watched' in the 'search' reducer
  addedToWatched = (e) => {
    e.preventDefault();
    this.props.addToWatched(this.props.movie.id)
  } 
        render() {
          // checking to see if an id within the 'watched' state array matches the movie id. 
          const watchedButton = this.props.watched.some(el=> el.id === this.props.movie.id) ? (<i class="fas fa-check"></i> ):(<i class="fas fa-times"></i>)

          return(
         <div className="card-frontpage">
            <div className="card-image">
               
                <img src= {"https://image.tmdb.org/t/p/w300/" + this.props.movie.poster_path} alt="movie poster"  onError={(e)=>{e.target.onerror = null; e.target.src="https://www.2queue.com/wp-content/uploads/tdomf/4299/movie-poster-coming-soon.png"}}/>
                
                </div>     
                 <div className="card-content">
                 <h2>{this.props.movie.title}</h2>
                 <div className="rating">
                 <i class="fas fa-star"></i><span>{this.props.movie.vote_average}/10</span>
                 {/* loading the genre data file and matching the key and value pairs, and then filtering the matches for the corresponding genre id adn then displayin the genre name(s) */}
                 <span className="genres">	{this.props.movie.genre_ids.map((id, index) => {
							const item = genreData.genres.filter(genre => genre.id === id);
							if(item.length)
								return (
									<p key={id}>{item.shift().name}{index + 1 !== this.props.movie.genre_ids.length && ', '} </p>
								)
						})}</span>
                 </div>
                 <div className="overview">
                 <p className="summary">{this.props.movie.overview}</p>
                 <p style={{visibility: 'hidden'}}>{this.props.movie.release_date}</p>
                 </div>
                 <div className="card-bottom">
                   <span >
                  <a  href={'https://www.themoviedb.org/movie/'+ this.props.movie.id + '-' + this.props.movie.title} className='btn btn-secondary ' >Details</a></span>
                   <span className="watched-btn"> <button onClick={this.addedToWatched} className="btn btn-light" >Watched</button>
                     {watchedButton}
                  </span>
                 </div>
                  
                 <div/>
                 </div>
           
        </div>
          )
          }
   
}


const mapStateToProps = (state) => ({
  watched: state.movies.watched,
  movies:state.search.movies
})

export default connect(mapStateToProps)(MovieItem);