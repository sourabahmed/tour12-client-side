import React from 'react';
import { useForm } from "react-hook-form";
import './AddReview.css'

const AddReview = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('https://fast-dusk-58420.herokuapp.com/review', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('a review added')
            }
        })
    }
    return (
        <div>
            <h2 className="m-4">Please give a review</h2>
            <form className="review-from" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")}  placeholder="Name"/> <br />
                <input {...register("imgURL")}  placeholder="Image url"/> <br />
                <textarea {...register("description")}  placeholder="description"/> <br />
                <input className="bg-danger text-white fs-5" type="submit" />
            </form>
        </div>
    );
};

export default AddReview;