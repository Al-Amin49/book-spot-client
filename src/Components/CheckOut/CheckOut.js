import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth'
import useBooks from '../hooks/useBooks/useBooks';
import auth from '../../firebase.init';
const CheckOut = () => {
    const {id}= useParams();
    const [books, setBooks]=useState({});
    useEffect(()=>{
        fetch(`http://localhost:4000/book/${id}`)
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[id])
  
    
    // const handlePlaceOrder=(event)=>{
    //   event.preventDefault();
    //   const phone= event.target.phone.value;
    //   const address= event.target.address.value;

    //   const orderInfo={
    //     id:id,
    //     name:user.displayName,
    //     email:user.email,
    //    book_name:books.name,
    //   author_name:books.author,
    //   price:books.price,
    //   phone:phone,
    //   address:address, 
    //   orderDate:new Date()
    //   }
     

    // }

   
    return (
        <div className='container mt-5'>
          <p>You have to book{books._id}</p>
            <h2>{books.id}</h2>            
  <table class="table">
    <thead>
      <tr>
        <th>Description </th>
        <th>Quantity</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <span>{books.name}</span><br/>
          <span>{books.author}</span>
        </td>
      
        
        <td>1</td>
        <td>${books.price}</td>
      </tr>
      {/* <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr> */}
    </tbody>
  </table>
  <button className='btn btn-primary d-block mx-auto' >CheckOut</button>
        </div>
    );
};

export default CheckOut;