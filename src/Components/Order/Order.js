import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useBooks from '../hooks/useBooks/useBooks';

const Order = () => {
    const {id}= useParams();
    const [books]=useBooks(id);
    const [user]= useAuthState(auth);
    const handlePlaceOrder=(event)=>{
      event.preventDefault();
      const phone= event.target.phone.value;
      const address= event.target.address.value;
      const date= new Date() ;
      const orderInfo={
        name:user.displayName,
        email:user.email,
      book:books.name,
    author:books.author,
      price:books.price,
      phone:phone,
      address:address, 
      date:date
      }
      fetch('http://localhost:4000/order', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(orderInfo),
})
  .then((response) => response.json())
  .then((data) => {
    if(data.insertedId){
      toast('Your Order is booked!')
      event.target.reset()
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });
    }
    return (
        <div className='w-50 mx-auto'>
        <h2>Please Order: {books.name}</h2>
        <form onSubmit={handlePlaceOrder}>
        <input className='w-100 mb-2' type="text" value={user.displayName} name="name" placeholder="name" required readOnly /><br/>
        <input className='w-100 mb-2' type="email" value={user.email} name="email" placeholder="email" required readOnly /><br/>
        <input className='w-100 mb-2' type="text" value={books.name} name="book-name" placeholder="Book Name" required readOnly /><br/>
        <input className='w-100 mb-2' type="text" value={books.author} name="author" placeholder="author" required readOnly /><br/>
        <input className='w-100 mb-2' type="text" value={books.price} name="price" placeholder="price" required readOnly /><br/>
        <input className='w-100 mb-2' type="text" autoComplete='off' name="address" placeholder="address" required /><br/>
        <input className='w-100 mb-2' type="text" name="phone" placeholder="phone" required /><br/>
        <input className='w-100 mb-2' type="text" value={new Date()} name="orderDate" placeholder="Date" required /><br/>
        <input type="submit" value="Place Order"/>

        </form>
    </div>
    );
};

export default Order;