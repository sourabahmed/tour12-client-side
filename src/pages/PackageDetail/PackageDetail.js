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
        <div className="row mt-5">
            {/* <h2>This is package detail id {detailId}</h2> */}
            <div className="col-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={user.displayName} {...register("name")} placeholder="user name" /> <br />
                    <input defaultValue={user.email} {...register("email")} placeholder="user email" /> <br />
                    <input {...register("address")} placeholder="Addres" /> <br />
                    <input {...register("phone")} placeholder="phone" /> <br />
                    <input defaultValue={apackage.price} {...register("price")} placeholder="Price" /> <br />
                    <input type="submit" />
                </form>
            </div>
            <div className="col-7">
                <img src={apackage?.imgURL} alt="" />
            </div>
        </div>
    );
};

export default PackageDetail;