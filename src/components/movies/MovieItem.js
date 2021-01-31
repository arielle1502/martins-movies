// the MovieItem component takes props and loads them into the UI for the cards that load on the homepage once a search has been submitted.

import React, {Component} from 'react';
import { connect } from 'react-redux';
import genreData from '../../data/genres.json'



class MovieItem extends Component {
  constructor(props) {
    super(props);
    };

  state= {
    markedWatched: this.markedWatched
  };

  addedToWatched = (e) => {
    e.preventDefault();

    this.props.addToWatched(this.props.movie.id)

    this.setState({
      markedWatched: true
    })
  }
 
        render() {

        //   const arr = this.props.movie.genre_ids,
        //   arrObj = genreData.genres,
        //   result = arr.map(id => arrObj.find(o => o.id === id).name);
        
        // console.log(result);
         
          const watchedButton = this.props.watched.some(el=> el.id === this.props.movie.id) ? (<button className="blackButton">watched</button> ):(<button className="whiteButton">not watched</button>)

          return(
         <div className="card frontpage">
            <div>
                <h2>{this.props.movie.title}</h2>
                <img src= {"https://image.tmdb.org/t/p/w300/" + this.props.movie.poster_path} alt="movie poster" style={{width:'250px', padding:'20px'}} onError={(e)=>{e.target.onerror = null; e.target.src="https://www.2queue.com/wp-content/uploads/tdomf/4299/movie-poster-coming-soon.png"}}/>
                 
                 <div className="date">
                 <h4 style={{textAlign: 'center'}}>Release Date:</h4>
                 <h5 style={{textAlign: 'center'}}>{this.props.movie.release_date}</h5>
                 <h4 style={{textAlign: 'center'}}>Average Rating:</h4>
                 <h5 style={{textAlign: 'center'}}>{this.props.movie.vote_average}/10</h5>
                 <ul className="movie-genres">
						{this.props.movie.genre_ids.map((id, index) => {
							const item = genreData.genres.filter(genre => genre.id === id);
							if(item.length)
								return (
									<li key={id}>{item.shift().name}{index + 1 !== this.props.movie.genre_ids.length && ', '} </li>
								)
						})}
					</ul>
                   <button onClick={this.addedToWatched} className="whiteButton">add to watched</button>
                  
                   {watchedButton}
                 </div>
                 
            </div>
            <div>
            <h3 className="summary">{this.props.movie.overview}</h3>
            <a href={'https://www.imdb.com/title/' + this.props.movie.imdb_id} className='btn btn-dark ' style={{margin:'2rem'}} >Go to IMDB Page</a>
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