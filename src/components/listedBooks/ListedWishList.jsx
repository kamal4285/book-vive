import React, { useContext } from 'react';
import { BookContext } from '../../constext/BookProvider';
import BookCard from '../ui/BookCard';

const ListedWishList = ({sortingType}) => {

    const {wishlist} = useContext(BookContext);


    let filteredWishlist = wishlist;
    console.log(filteredWishlist);

    if(sortingType === 'pages'){
        filteredWishlist = [...wishlist].sort((a, b) => a.totalPages - b.totalPages);
    }else if(sortingType === 'rating'){
        filteredWishlist = [...wishlist].sort((a, b) => a.rating - b.rating);
    }

    if(filteredWishlist.length === 0){
        return (
        <div className='h-[50vh] bg-gray-100 flex items-center justify-center'>
            <h2 className='font-bold text-3xl'>No wish list data found</h2>
        </div>
        );
    }

    return (
         <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                filteredWishlist.map((book, ind) => <BookCard key={ind} book={book}></BookCard>)
            }
        </div>
    );
};

export default ListedWishList;