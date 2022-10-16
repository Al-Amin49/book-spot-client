import React from 'react';
import{ Button, Card, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Book = ({book}) => {
const {_id, name,author, price, img }= book
    return (
       
           <div className='text-center'> 
      
        <Col >
        <Card >
      <Card.Img variant="top" src={img} style={{height:'300px'}}/>
      
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {author}
        </Card.Text>
        <hr/>
        <div className='d-flex '>
            <h4 className='mx-5'>${price}</h4>
      <Link to={`/checkout/${_id}`}>  <Button variant="info">Buy Now</Button></Link>
        </div>
      </Card.Body>
    </Card>
        
        </Col>
          
        </div>
    );
};

export default Book;