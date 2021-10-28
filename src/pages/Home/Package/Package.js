import React from 'react';

const Package = (props) => {
    const { imgURL, packageName, rating, price, duration} = props?.pack;
    return (
        <div>
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
        </div>
    );
};

export default Package;