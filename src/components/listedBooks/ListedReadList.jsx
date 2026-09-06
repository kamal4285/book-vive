import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../constext/BookProvider';
import BookCard from '../ui/BookCard';

const ListedReadList = ({sortingType}) => {

    const {readList} = useContext(BookContext);

    const [filteredReadlist, setFilteredReadlist] = useState(readList);

    //console.log(filteredReadlist, 'filter')

    useEffect(() => {
        if(sortingType) {
            if(sortingType === 'pages'){
                const sortedData = [...readList].sort((a, b) => a.totalPages - b.totalPages);
                console.log(sortedData);
                setFilteredReadlist(sortedData)
            }else if(sortingType === 'rating'){
                 const sortedData = [...readList].sort((a, b) => a.rating - b.rating);
                console.log(sortedData);
                setFilteredReadlist(sortedData)
            }
        }
    }, [sortingType, readList]) 

    if(filteredReadlist.length === 0){
        return (
        <div className='h-[50vh] bg-gray-100 flex items-center justify-center'>
            <h2 className='font-bold text-3xl'>No read list data found</h2>
        </div>
        );
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                filteredReadlist.map((book, ind) => <BookCard key={ind} book={book}></BookCard>)
            }
        </div>
    );
};

export default ListedReadList;