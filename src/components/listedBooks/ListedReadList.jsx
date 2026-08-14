import React, { useContext } from 'react';
import { BookContext } from '../../constext/BookProvider';
import BookCard from '../ui/BookCard';

const ListedReadList = () => {

    const {readList} = useContext(BookContext);

    if(readList.length === 0){
        return (
        <div className='h-[50vh] bg-gray-100 flex items-center justify-center'>
            <h2 className='font-bold text-3xl'>No read list data found</h2>
        </div>
        );
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                readList.map((book, ind) => <BookCard key={ind} book={book}></BookCard>)
            }
        </div>
    );
};

export default ListedReadList;