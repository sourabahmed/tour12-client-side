import React, { useEffect, useState } from 'react';
import './ManageOrders.css'

const ManageOrders = () => {
    const [manageOrders, setManageOrders] = useState([]);
    const [isDeleted, setIsDeleted] = useState(null);

    useEffect(() => {
        fetch('https://fast-dusk-58420.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setManageOrders(data))
    },[isDeleted])

    

    const deleteManageOrder= id => {
        console.log(`/deleteOreder/${id}`);
        const yes = window.confirm('Are you sure you want to delete this order')
       if(yes){
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
        <div>
            <div className="manage-orders">
            {/* <h1>This is orders page</h1> */}
            {
                manageOrders.map(order => 
                    <div className="manage-order">
                        <h5>Name:  {order.name}</h5>
                        <h6>Email:  {order.email}</h6>
                        <h4>Package: {order.packagename}</h4>
                        <h5>Price: {order.price}</h5>
                        <button onClick={() => deleteManageOrder(order?._id)} className="btn btn-danger">Delete</button>
                    </div>
                )
            }
        </div>
        </div>
    );
};

export default ManageOrders;