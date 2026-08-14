import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext();

const BookProvider = ({children}) => {

     const [readList, setReadList] = useState([]);
     const [wishlist, setWishlist] = useState([]);

    const handleMarkAsRead = (currentBook) => {
        // step 1: store book;
        // step 2: where to store;
        // step 3: array of collection;
        // step 4: if the book already exist then show a alert
        // step 5: if not then add the book in the array of collection

        const isExistBook = readList.find(book => book.bookId === currentBook.bookId);

            if(isExistBook){
                toast.error('The book is already exist');
            }else{
                setReadList([...readList, currentBook])
                toast.success(`${currentBook.bookName} is added to list`)
            }

       // console.log(currentBook, readList);
    }

    const handleWishlist = (currentBook) => {
        // step 1: store book;
        // step 2: where to store;
        // step 3: array of collection;
        // step 4: if the book already exist then show a alert
        // step 5: if not then add the book in the array of collection

        const isExistInReadList = readList.find(book => book.bookId === currentBook.bookId);
        if(isExistInReadList){
            toast.error('This book is already in read list');
            return;
        }

        const isExistBook = wishlist.find(book => book.bookId === currentBook.bookId);

            if(isExistBook){
                toast.error('The book is already exist in wishlist');
            }else{
                setWishlist([...wishlist, currentBook])
                toast.success(`${currentBook.bookName} is added to wishlist`)
            }
  
        //console.log(currentBook, wishlist);
    }
    

    const data = {
        readList,
        setReadList,
        handleMarkAsRead,
        wishlist,
        setWishlist,
        handleWishlist
    }

    return (
       <BookContext.Provider value={data}>
        {children}
       </BookContext.Provider>
    );
};

export default BookProvider;