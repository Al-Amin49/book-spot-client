import React from 'react';
import { useParams } from 'react-router-dom';
import useBooks from '../hooks/useBooks/useBooks';

const CheckOut = () => {
    const {id}= useParams();
    const [books]= useBooks(id);
   
    return (
        <div className='container mt-5'>
            <h2>{books?.author_name}</h2>            
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
        <td>{books.book_name}</td>
        {console.log(books.book_name)}
        
        <td>Doe</td>
        <td>john@example.com</td>
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
        </div>
    );
};

export default CheckOut;