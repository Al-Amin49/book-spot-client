import React, { useEffect, useState } from 'react';


const ManageBook = () => {
    const [books, setBooks]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/book')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
    const handleAddBook=(id)=>{
        const proceed= window.confirm('Are you sure you want to delete');
      if (proceed){
        const url =`http://localhost:4000/book/${id}`;
        fetch(url, {
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            const remaining= books.filter(book=>book._id !== book.id)
            setBooks(remaining)
            // another system
            // setServices([]);
        })
      }
    }
    return (
        <div>
            <div className='mx-auto w-50'>
            <h2>THis is manage book</h2>
            {
                books.map(book=><div key={book._id}> 
                    <h5>{book.name} <button onClick={()=>handleAddBook(book._id)}>X</button></h5>
                </div>)
            }
        </div>
            
        </div>
    );
};

export default ManageBook;