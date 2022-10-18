import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import OrdersTable from './OrdersTable';

const Orders = () => {
    const [user]=useAuthState(auth)
    const [orders, setOrders]=useState([]);
    useEffect(()=>{
        const email=user.email
   fetch(`http://localhost:4000/order?email=${email}`)
   .then(res=>res.json())
   .then(data=>setOrders(data))
    })
    return (
        <div>
            <p>Your Orders: {orders.length}</p>
            <table  striped bordered hover style={{ maxWidth: '1000px' }} className='mx-auto p-4'>
    <thead>
      <tr>
        <th>OrderId</th>
        <th>Customer_Name</th>
        <th>Customer_Address</th>
        <th>Customer_Phone</th>
        <th>Order</th>
        <th>Order Price</th>
        <th>Order Date</th>
      </tr>
    </thead>
    <tbody>
        {
            orders.map((order, i)=><OrdersTable key={order._id} order={order} index={i+1}></OrdersTable>)
        }
   
    </tbody>
  </table>
            
        </div>
    );
};

export default Orders;