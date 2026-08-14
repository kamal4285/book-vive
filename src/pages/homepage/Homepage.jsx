import React from 'react';
import Banner from '../../components/shared/navbar/banner/Banner';
import AllBooks from '../../components/homepage/AllBooks';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <AllBooks></AllBooks>
        </div>
    );
};

export default Homepage;