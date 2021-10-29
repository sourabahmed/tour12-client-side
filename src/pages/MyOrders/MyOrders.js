import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const {user} = useAuth();
    useEffect(() => {
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])

    const deleteOrder= id => {
        console.log(`/deleteOreder/${id}`);
    }
    return (
        <div>
            <h1>This is orders page</h1>
            {
                orders.filter(data => data?.email === user?.email).map(order => 
                    <div>
                        <h2>{order.email}</h2>
                        <button onClick={() => deleteOrder(order?._id)} className="btn btn-danger">Delete</button>
                    </div>
                )
            }
        </div>
    );
};

export default MyOrders;