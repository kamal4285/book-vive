import React, { useContext } from 'react';
import { BookContext } from '../../constext/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../components/listedBooks/ListedReadList';
import ListedWishList from '../../components/listedBooks/ListedWishList';

const Books = () => {

    const {readList, wishlist} = useContext(BookContext);
    //console.log(readList, wishlist);

    return (
        <div className='container mx-auto my-3'>
          
             <Tabs>
                <TabList>
                <Tab>Read List</Tab>
                <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <ListedReadList></ListedReadList>
                </TabPanel>
                <TabPanel>
                    <ListedWishList></ListedWishList>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;