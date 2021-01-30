// the MovieItem component takes props and loads them into the UI for the cards that load on the homepage once a search has been submitted.

import React, {Component} from 'react';
import {addToWatched} from '../../redux/actions/movieActions'


class MovieItem extends Component {


  state= {
    markedWatched: false
  };

  addToWatched = (e) => {
    e.preventDefault();

    this.props.addToWatched(this.props.movie)

    this.setState({
      markedWatched: true
    })
  }
    
        render() {
          const {poster_path, title, release_date, imdb_id, overview, id} = this.props.movie;
          return(
         <div className="card frontpage">
            <div>
                <h2>{title}</h2>
                <img src= {"https://image.tmdb.org/t/p/w300/" + poster_path} alt="movie poster" style={{width:'250px', padding:'20px'}} onError={(e)=>{e.target.onerror = null; e.target.src="https://www.2queue.com/wp-content/uploads/tdomf/4299/movie-poster-coming-soon.png"}}/>
                 
                 <div className="date">
                 <h4 style={{textAlign: 'center'}}>Release Date:</h4>
                 <h5 style={{textAlign: 'center'}}>{release_date}</h5>
                {
                  this.state.markedWatched ? (
                    <button className="blackButton">watched</button>
                  ) : (<button onClick={this.addToWatched} className="whiteButton">Not watched</button>)
                }
                  
                 </div>
                 
            </div>
            <div>
            <h3 className="summary">{overview}</h3>
            <a href={'https://www.imdb.com/title/' + imdb_id} className='btn btn-dark ' style={{margin:'2rem'}} >Go to IMDB Page</a>
            </div>
        </div>
          )
          }
   
}

export default MovieItem;