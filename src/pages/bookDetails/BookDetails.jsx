import React, { useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../constext/BookProvider';

const BookDetails = () => {
    const {bookId: bookParamsId} = useParams();
    //console.log('bookParamsId', bookParamsId);

    const books = useLoaderData();
    //console.log(books);

    const expectedBook = books.find(book => book.bookId === Number(bookParamsId));
    //console.log(expectedBook);
    const {bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing} = expectedBook;

    const {handleMarkAsRead, handleWishlist, storedBooks} = useContext(BookContext);
    

   

    return (
        <div className="card lg:card-side bg-base-100 shadow-sm container mx-auto grid grid-cols-2 my-8">
  <figure  className='bg-gray-100 rounded-xl'>
    <img
      src={image}
      alt="Album"
      className='h-[450px] w-[300px] p-10' />
  </figure>
  <div className="card-body space-y">
    <h2 className="card-title text-2xl">{bookName}</h2>
    <h2 className="card-title">By: {author}</h2>
    <p className='py-2 border-y'>{category}</p>
    <p> Review: {review}</p>
    <div className='flex items-center gap-2'> 
        { tags.map((tag, ind) => (
            <div key={ind} className="badge text-green-500 bg-green-100 font-bold">{tag}</div>
        ))}
    </div>

    <div className=" border-t space-y">
        <div className='flex justify-between gap-2'>
           <span>Number of pages:</span> <span>{totalPages}</span>
        </div>
        <div className='flex justify-between gap-2'>
           <span>Publisher:</span> <span>{publisher}</span>
        </div>
        <div className='flex justify-between gap-2'>
           <span>Publish time:</span> <span>{yearOfPublishing}</span>
        </div>
        <div className='flex items-center gap-2'>
            <button className='btn' onClick={() => handleMarkAsRead(expectedBook)}>Mark as Read</button>
            <button className="btn btn-primary" onClick={() => handleWishlist(expectedBook) }>Add to Wishlist</button>
        </div>
    </div>
  </div>
</div>
    );
};

export default BookDetails;