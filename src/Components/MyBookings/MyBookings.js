import React, { useEffect, useState } from 'react';
import useAuth from '../../useAuth';
import Booking from '../Booking/Booking';

const MyBookings = () => {
    const [orders,setOrders]=useState([]);
    const {user}=useAuth();
    const {uid}=user;
    useEffect(()=>{
        fetch(`http://localhost:5000/bookings/${uid}`)
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[])
    
    return (
        <div>
            {
                orders.map(order=><Booking
                key={order._id}
                signlebooking={order.singlepackage}
                order={order}
                ></Booking>)
            }
        </div>
    );
};

export default MyBookings;