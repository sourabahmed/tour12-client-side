import React from 'react';
import { useForm } from "react-hook-form";
import './AddPackage.css'

const AddPackage = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/packages', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('a package added')
            }
        })
    }
    return (
        <div className="mt-5">
            <h2>Add a Package</h2>
            <form className="addPackage-form" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("packageName")}  placeholder="package name"/> <br />
                <input {...register("imgURL")}  placeholder="Image url"/> <br />
                <input {...register("rating")}  placeholder="Rating"/> <br />
                <textarea {...register("description")}  placeholder="description"/> <br />
                <input {...register("price")}  placeholder="Price"/> <br />
                <input type="number" {...register("duration")} placeholder="days you wanna tour"/> <br />
                <input className="bg-danger text-white fs-5" type="submit" />
            </form>
        </div>
    );
};

export default AddPackage;