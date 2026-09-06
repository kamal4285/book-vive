const getAllReadlistFromLocalDB = () => {
    const allReadList = localStorage.getItem('readList');
    if(allReadList) return JSON.parse(allReadList);
    return [];
};

const addReadlistLocalDB = (book) => {
    const allBooks = getAllReadlistFromLocalDB();
    const isAlreadyExist = allBooks.find(bk => bk.bookId === book.bookId)
    if(!isAlreadyExist){
        allBooks.push(book);
        localStorage.setItem('readList', JSON.stringify(allBooks));
    }
};


const getAllWislistFromLocalDB = () => {
    const allWishlist = localStorage.getItem('wishList');
    if(allWishlist) return JSON.parse(allWishlist);
    return [];
}

const addWishlistToLocalDB = (book) =>{
    const wishListBooks = getAllWislistFromLocalDB();
    const isAlreadyExist = wishListBooks.find(wishListBook => wishListBook.bookId === book.bookId)
    if(!isAlreadyExist){
        wishListBooks.push(book);
        localStorage.setItem('wishList', JSON.stringify(wishListBooks));
    }
}

export {getAllReadlistFromLocalDB, addReadlistLocalDB, getAllWislistFromLocalDB, addWishlistToLocalDB};