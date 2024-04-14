import React, { useContext } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { sortOptions } from '../../../../constants/constants';
import styles from './SortMenu.module.css';
import { CatalogContext } from '../../../layouts/ListingPage/ListPage';
const SortMenu = () => {
    const [sortOption, setSortOption] = React.useState('');
    const {catalogData,setCatalogData, pageDataUpdateHandler} = useContext(CatalogContext);
    const handleSortChange = (event) => {
        setSortOption(event.target.value);
        // Perform sort logic here
        console.log('Sorting by:', event.target.value);
        const sortKey = event.target.value;
        const sortDirection = sortKey.includes('price') ? sortKey.split('_')[1] : 'asc';
        const sortField = sortKey.includes('price') ? 'price' : 'title';
        const sortedData = [...catalogData].sort((a, b) => {
            if (sortDirection === 'asc') {
                if (typeof a[sortField] === 'string') {
                    return a[sortField].localeCompare(b[sortField]);
                } else {
                    return a[sortField] - b[sortField];
                }
            } else {
                if (typeof a[sortField] === 'string') {
                    return b[sortField].localeCompare(a[sortField]);
                } else {
                    return b[sortField] - a[sortField];
                }
            }
        });
        setCatalogData(sortedData);
        pageDataUpdateHandler(sortedData);
    };

    return (
        <FormControl className={styles.SortByCtn}>
            <InputLabel id="sort-label">Sort By</InputLabel>
            <Select
                labelId="sort-label"
                id="sort-select"
                value={sortOption}
                onChange={handleSortChange}
                defaultValue={sortOptions[0]}
            >
                {Object.keys(sortOptions).map((optionKey) => (
                    <MenuItem key={optionKey} value={optionKey}>
                        {sortOptions[optionKey]}
                    </MenuItem>
                ))}
                
            </Select>
        </FormControl>
    );
};

export default SortMenu;