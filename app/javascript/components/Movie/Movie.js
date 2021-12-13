import React, {useState, useEffect, Fragment} from 'react'
import { useParams } from "react-router-dom"
import axios from 'axios'
import Header from './Header'
import ReviewForm from './ReviewForm'

const Movie = (props) => {

    const [movie, setMovie] = useState({})
    const [review, setReview] = useState({})
    const { slug } = useParams()
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const url = `/api/v1/movies/${slug}`
        axios.get(url)
        .then( resp => {
            setMovie(resp.data)
            setLoaded(true)
        })
        .catch( resp => console.log(resp))
    }, [])


    const handleChange = (e) => {
        e.preventDefault()
        setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))
        console.log('review:', review)
    }

    const handleSubmit = (e) => {
      
        e.preventDefault()
        const csrfToken = document.querySelector('[name=csrf-token]').content
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

        const movie_id = movie.data.id
        axios.post('/api/v1/reviews', {review, movie_id})
        .then(resp => {
            const included = [...movie.included, resp.data.data]
            setMovie({...movie, included})
            setReview({title: '', description: '', score: 0})
        })
        .catch(resp => {})
    }

    const setRating = (score, e) => {
        e.preventDefault()
        setReview({...review, score})
    }

    return (
        <div className="wrapper">
            { loaded && 
            <Fragment>
                <div className="column">
                    <div className="main">
                        <Header
                            key={movie.data.attributes.title}
                            title={movie.data.attributes.title}
                            imgurl={movie.data.attributes.image_url} 
                            avg_score={movie.data.attributes.avg_score}
                            reviews={movie.included}
                        />
                        <div className="reviews"></div>
                    </div>
                </div>
                <div className="column">
                    <ReviewForm 
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        setRating={setRating}
                        attributes={movie.data.attributes}
                        review={review}
                    />
                </div>
            </Fragment>
            }
        </div>
    )
}

export default Movie
