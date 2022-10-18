import React from 'react';
import { Link, useParams } from 'react-router-dom';

import useBooks from '../hooks/useBooks/useBooks';

const CheckOut = () => {
    const {id}= useParams();
    const [books]=useBooks(id)
    // const [books, setBooks]=useState({});
    // useEffect(()=>{
    //     fetch(`http://localhost:4000/book/${id}`)
    //     .then(res=>res.json())
    //     .then(data=>setBooks(data))
    // },[id])
  
    
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
     
    </tbody>
  </table>
 <Link to={`/order/${id}`}> <button className='btn btn-primary d-block mx-auto' >CheckOut</button></Link>
        </div>
    );
};

export default CheckOut;