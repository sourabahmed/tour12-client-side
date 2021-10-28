import React from 'react';
import { useForm } from "react-hook-form";

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
        .then(data => console.log(data))
    }
    return (
        <div>
            <h1>This is add Package</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("packageName")}  placeholder="package name"/>
                <input {...register("imgURL")}  placeholder="Image url"/>
                <input {...register("rating")}  placeholder="Rating"/>
                <input {...register("price")}  placeholder="Price"/>
                <input type="number" {...register("duration")} placeholder="days you wanna tour"/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddPackage;