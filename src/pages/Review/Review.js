import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Review.css'

const Review = () => {
    const [reviews, setReviews] = useState();
    useEffect(() => {
        fetch('https://fast-dusk-58420.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div>
            <h1>What cliant say <br /> about us</h1>
            <div className="reviews">
                {
                    reviews?.map(review => 
                    <div key={review._id} className="review">
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