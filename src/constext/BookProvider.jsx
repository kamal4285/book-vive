import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { addReadlistLocalDB, addWishlistToLocalDB, getAllReadlistFromLocalDB, getAllWislistFromLocalDB } from '../utils/localDB';

export const BookContext = createContext();

const BookProvider = ({children}) => {

     const [readList, setReadList] = useState(() => getAllReadlistFromLocalDB());
     const [wishlist, setWishlist] = useState(() => getAllWislistFromLocalDB());

    //  useEffect(() => {
    //     const getReadListFromLocalDB = getAllReadlistFromLocalDB();
    //     console.log(getReadListFromLocalDB)
    //  }, [])

    //console.log(readList);

    const handleMarkAsRead = (currentBook) => {
        // step 1: store book;
        // step 2: where to store;
        // step 3: array of collection;
        // step 4: if the book already exist then show a alert
        // step 5: if not then add the book in the array of collection

        addReadlistLocalDB(currentBook);

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

        addWishlistToLocalDB(currentBook);

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