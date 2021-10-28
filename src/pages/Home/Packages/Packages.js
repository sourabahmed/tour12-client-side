import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Package from '../Package/Package';
import './Packages.css'

const Packages = () => {
    const[packages, setPackages] = useState([]);
    console.log(packages);
    useEffect(() => {
        fetch('http://localhost:5000/packages')
        .then(res => res.json())
        .then(data => setPackages(data))
    },[])
    return (
        <div>
            <h2>Packages</h2>
            <div className="packages">
                {
                    packages.map(pack => <Package
                    key={pack._id}
                    pack={pack}
                    ></Package>)
                }
            </div>
        </div>
    );
};

export default Packages;