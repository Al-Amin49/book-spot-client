import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import {Container, Row} from 'react-bootstrap'
// import useBooks from '../../hooks/useBooks/useBooks';
const Books = () => {
    const [books, setBooks]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/book')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
    
    return (
        <div>
            <h3>Books available: {books.length}</h3>
            <Container>
                <Row xs={12} sm={6} md={4} lg={3} className='g-5'>
            {
                books.map(book=><Book key={book._id} book={book}></Book>)
            }
            </Row>
            </Container>
            
        </div>
    );
};

export default Books;