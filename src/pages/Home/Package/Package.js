import React from 'react';
import { Link } from 'react-router-dom';
import './Package.css'

const Package = (props) => {
    const {description, imgURL, packageName, rating, price, duration, _id} = props?.pack;
    return (
        <div className="package">
            <div>
                <img className="img-fluid" src={imgURL} alt="" />
            </div>
            <div className="p-3">
                <div className="d-flex justify-content-between">
                    <h5>${price}/per person</h5>
                    <h6>{duration} days</h6>
                </div>
                <div>
                    <h3 className="text-start">{packageName}</h3>
                    <p><small>{description.slice(0, 100)}</small></p>
                </div>
                <div className="align-items-center d-flex justify-content-between">
                    <h5>Rating: {rating}</h5>
                    <Link to={`/booknow/${_id}`}><button className="btn btn-danger">Book Now</button></Link>
                </div>
            </div>
            
        </div>
    );
};

export default Package;