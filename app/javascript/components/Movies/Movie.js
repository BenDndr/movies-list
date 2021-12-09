import React from 'react'
import { Link } from 'react-router-dom'

const Movie = ({title, imgurl, slug, score}) => {
    return (
        <div className="card">
            <div className="movie-logo"><img src={imgurl} alt={title} className="poster" /></div>
            <div className="movie-name"><h3>{title}</h3></div>
            <div className="movie-score">{score}</div>
            <div className="movie-link btn">
                <Link to={`/movies/${slug}`}>View</Link>
            </div>

            
            
        </div>
    )
}

export default Movie
