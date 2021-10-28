import React from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../hooks/useAuth';

const PackageDetail = () => {
    const {user} = useAuth();
    const {detailId} = useParams();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

    }
    return (
        <div>
            <h2>This is package detail id {detailId}</h2>
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

export default PackageDetail;