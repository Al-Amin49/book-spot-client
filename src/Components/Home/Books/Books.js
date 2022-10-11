import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books, setBooks]=useState([]);
    useEffect(()=>{
        fetch('books.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
    return (
        <div>
            <h3>Books available: {books.length}</h3>
            {
                books.map(book=><Book key={book._id} book={book}></Book>)
            }
            
        </div>
    );
};

export default Books;