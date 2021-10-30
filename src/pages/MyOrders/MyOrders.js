import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import './MyOrder.css'

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [isDeleted, setIsDeleted] = useState(null);
    const {user} = useAuth();
    console.log(orders);
    useEffect(() => {
        fetch('https://fast-dusk-58420.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[isDeleted]) 

    

    const deleteOrder= id => {
        console.log(`/deleteOreder/${id}`);
        const sure = window.confirm('Are you sure you want to delete this order')
       if(sure){
        fetch(`https://fast-dusk-58420.herokuapp.com/deleteOreder/${id}`, {
            method: "DELETE",
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            if(result.deletedCount){
                alert('item deleted')
                setIsDeleted(true);
            }
            else{
                setIsDeleted(false);
            }
        })
       }
    }
    return (
        <div className="my-orders">
            
            {
                orders.filter(data => data?.email === user?.email).map(order => 
                    <div className="my-order">
                        <h5>Name:  {order.name}</h5>
                        <h6>Email:  {order.email}</h6>
                        <h4>Package: {order.packagename}</h4>
                        <h5>Price: {order.price}</h5>
                        <button onClick={() => deleteOrder(order?._id)} className="btn btn-danger">Delete</button>
                    </div>
                )
            }
        </div>
    );
};

export default MyOrders;