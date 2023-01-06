import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const AddBook = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:4000/book', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      if(data.insertedId){
     
        toast("Successfully inserted a book!")
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    };
    return (
        <div className='w-25 mx-auto shadow-lg p-3 mt-5'>
        <h3 className='mb-5 text-success text-center'>Please Add a Book</h3>
       
        <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
  <input className='mb-2'placeholder='Name'  {...register("name", { required: true, maxLength: 20 })} />
  <input className='mb-2'placeholder='Author' {...register("author")} />
  <input className='mb-2'placeholder='Price' type="number" {...register("price")} />
  <input className='mb-2'placeholder='Photo URL' type="text" {...register("img")} />
  <input className='btn btn-success '  type="submit" value="Add Book" />
</form>
    </div>
    );
};

export default AddBook;