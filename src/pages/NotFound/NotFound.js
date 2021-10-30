import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="not-found">
            <h4>Error: 404 page not found</h4>
            <Link to="/home"><button className="btn btn-danger mt-3">Go Back</button></Link>
        </div>
    );
};

export default NotFound;