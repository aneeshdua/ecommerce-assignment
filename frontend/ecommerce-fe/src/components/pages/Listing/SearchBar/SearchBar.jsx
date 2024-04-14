import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import styles from './SearchBar.module.css';
import { useContext } from 'react';
import { CatalogContext } from '../../../layouts/ListingPage/ListPage';
import { searchProducts } from '../../../../api/api';

const SearchBar = () => {
    const [searchText, setSearchText] = useState('');
    const {setCatalogData, pageDataUpdateHandler} = useContext(CatalogContext);
    
    const handleSearch = () => {
        // Perform search logic here
        console.log('Searching for:', searchText);
        searchProducts(searchText).then((data) => {
            // Update the context with the search results
            setCatalogData(data);
            pageDataUpdateHandler(data);
        });
    };

    const handleChange = (event) => {
        setSearchText(event.target.value);
    };

    return (
        <div className={styles.searchBarCtn}>
            <TextField
                label="Search"
                value={searchText}
                onChange={handleChange}
                className={styles.searchInput}
            />
            <Button variant="contained" color="primary" onClick={handleSearch}>
                Search
            </Button>
        </div>
    );
};

export default SearchBar;