import React, {Component} from 'react';
import genreData from '../../data/genres.json'

let gender_ids = [] // intialize with an empty array
genreData.map(el => gender_ids[el.id] = el.name) // here you transform the data
// here you can setState({gender_ids})

const movie = {
    gender_ids: [
        28,
        12,
        16
    ]
    // rest of data
}

// how to get text gender, notice that gender_ids from console log is the one you use in state, not the one from the movie
movie.gender_ids.map(id => console.log(gender_ids[id]))