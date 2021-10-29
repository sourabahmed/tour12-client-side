import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../hooks/useAuth';
import './PackageDetail.css'

const PackageDetail = () => {
    const { user } = useAuth();
    const { detailId } = useParams();
    const { register, handleSubmit } = useForm();

    const [apackage, setApackage] = useState({});
    console.log(apackage);
    useEffect(() => {
        fetch(`http://localhost:5000/singlePackage/${detailId}`)
            .then(res => res.json())
            .then(data => setApackage(data))
    }, [])
    // post orders
    const onSubmit = data => {
        fetch('http://localhost:5000/orders', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div className="row m-sm-2 m-lg-5 ">
            {/* <h2>This is package detail id {detailId}</h2> */}

            <div className="col-sm-12 col-lg-7 border-end p-3">
                <div className="w-50 mx-auto border border-dark">
                    <div>
                        <img className="img-fluid" src={apackage?.imgURL} alt="" />
                    </div>
                    <div>
                        <p><small>{apackage?.description}</small></p>
                        <h3>{apackage?.packageName}</h3>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-lg-5 border border-dark p-3">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={user.displayName} {...register("name")} placeholder="user name" /> <br />
                    <input defaultValue={user.email} {...register("email")} placeholder="user email" /> <br />
                    <input {...register("address")} placeholder="Addres" /> <br />
                    <input {...register("phone")} placeholder="phone" /> <br />
                    <input defaultValue={apackage.price} {...register("price")} placeholder="Price" /> <br />
                    <input type="submit" value="Order now" />
                </form>
            </div>
        </div>
    );
};

export default PackageDetail;