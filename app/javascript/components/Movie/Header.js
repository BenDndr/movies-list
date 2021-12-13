import React from 'react'

const Header = ({title, imgurl, avg_score, reviews}) => {
    const total = reviews.length

    return (
        <div className="wrapper-m">
            <div className="flex-col">
                <img src={imgurl} alt={title} className="poster" />
                <h1>{title}</h1>
                <div>
                    <div className="totalReviews">{total} User Reviews</div>
                    <div className="starRating"></div>
                    <div className="totalOutOf">{avg_score} out of 5</div>
                </div>
            </div>
        </div>
    )
}

export default Header
