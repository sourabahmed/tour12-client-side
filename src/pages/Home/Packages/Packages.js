import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Package from '../Package/Package';
import './Packages.css'

const Packages = () => {
    const[packages, setPackages] = useState([]);
    const [spinner, setSpinner] = useState(true);
    console.log(packages);
    useEffect(() => {
        fetch('http://localhost:5000/packages')
        .then(res => res.json())
        .then(data => setPackages(data))
        setSpinner(false)
    },[])
    return (
        <div>
            <h2>Packages</h2>
            {
                spinner? <Spinner animation="border" role="status">
                            <span className="text-dark"></span>
                        </Spinner>:  
              <div className="packages">
                {
                    packages.map(pack => <Package
                    key={pack._id}
                    pack={pack}
                    ></Package>)
                }
            </div>
            }
        </div>
    );
};

export default Packages;