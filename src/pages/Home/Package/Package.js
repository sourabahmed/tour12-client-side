import React from 'react';
import { Link } from 'react-router-dom';
import './Package.css'

const Package = (props) => {
    const { imgURL, packageName, rating, price, duration} = props?.pack;
    return (
        <div className="package">
            <div>
                <img src={imgURL} alt="" />
            </div>
            <div>
                <div>
                    <h3>Price:{price}</h3>
                    <h4>Days: {duration}</h4>
                </div>
                <div>
                    <h3>{packageName}</h3>
                    <h5>Rating: {rating}</h5>
                </div>
            </div>
            <Link to="/booknow"><button className="btn btn-danger">Book Now</button></Link>
        </div>
    );
};

export default Package;