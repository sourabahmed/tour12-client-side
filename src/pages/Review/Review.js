import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Review.css'

const Review = () => {
    const [reviews, setReviews] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div>
            <h1>This is review</h1>
            <div className="reviews">
                {
                    reviews?.map(review => 
                    <div className="review">
                        <img className="img-fluid rounded-circle" src={review.imgURL} alt="" />
                        <h3>{review.name}</h3>
                        <h4>Traveller</h4>
                        <p><small>{review.description}</small></p>
                        <Link to='/review'><button className="btn btn-danger">Add Review</button></Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Review;