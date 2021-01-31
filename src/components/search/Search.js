// the search component takes the text that the uer eneters into the searchbar and holds it in state, the seachMovies function is then called and the text within the state is used to search the api data

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { searchMovies } from '../../redux/actions/movieActions'


export class Search extends Component {
    state={
        text:''
    };

    static propTypes = {
        searchMovies: PropTypes.func.isRequired,
        setAlert: PropTypes.func.isRequired
        
    }
    onSubmit = (e) => {
        e.preventDefault();
        
        this.props.searchMovies(this.state.text);
        this.setState({text:''})
        
    }
    onChange = (e) =>
        this.setState({[e.target.name]: e.target.value})
    
    render() {
        return (
            <div>


<ul class="navbar-nav ml-auto">
        <li class="nav-item d-flex">
          <div class="collapse fade" id="searchForm">
                <form onSubmit= {this.onSubmit} className ="form">
                    <input className ="searchBar border-0 bg-white"
                     type="text"
                     name="text"
                     placeholder="Search Movies.." 
                     value={this.state.text}
                     onChange={this.onChange}/>
                </form>
                </div>
                <a class="nav-link ml-auto" href="#searchForm" data-target="#searchForm" data-toggle="collapse">
          <i class="fas fa-search"></i>
          </a>
            </li>
      </ul>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
  movies: state.search.movies
});

const mapActionsToProps = {
  searchMovies
}

export default connect(mapStateToProps, mapActionsToProps)(Search)