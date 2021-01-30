import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Search from '../search/Search'


const Navbar = ({ icon }) =>{
        return (
          <Fragment>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand">
              <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" alt=""/>
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
              </button>
             <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                <Link to='/' className="link"><i className="fas fa-home"></i> Home <span class="sr-only">(current)</span></Link></li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0">
              <i className={icon}></i>
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
              </div>
            </nav>
            <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4">Fluid jumbotron</h1>
              <Fragment>{<Search/>}</Fragment>
            </div>
          </div>
          </Fragment>
          )
    }

Navbar.defaultProps = {
    icon: 'fas fa-film fa-4x left'
};

Navbar.propTypes = {
    icon: PropTypes.string.isRequired
}
export default Navbar



