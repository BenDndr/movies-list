import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Movie from './Movie'

const Movies = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get('/api/v1/movies.json')
        .then( resp => setMovies(resp.data.data))
        .catch(resp => console.log(resp))
    }, [movies.length])

    const grid = movies.map(item => {
        return (
            <Movie
                key={item.attributes.title}
                title={item.attributes.title}
                imgurl={item.attributes.image_url} 
                slug={item.attributes.slug} 
                score={item.attributes.avg_score}
            />
        )
    })

    return (
        <div className="home">
            <div className="header">
                <h1>MovieList</h1>
                <div className="subheader">Tell us what you think !</div>
            </div>
            <div className="grid">
                {grid}
            </div>
        </div>   
    )
}

export default Movies
