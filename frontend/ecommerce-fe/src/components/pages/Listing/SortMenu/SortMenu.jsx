import React, { useContext, useEffect } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { sortOptions } from '../../../../constants/constants';
import styles from './SortMenu.module.css';
import { CatalogContext } from '../../../layouts/ListingPage/ListPage';
const SortMenu = ({sortOption, setSortOption}) => {
    // const [sortOption, setSortOption] = React.useState('');
    const {catalogData,setCatalogData, pageDataUpdateHandler} = useContext(CatalogContext);


    useEffect(() => {
        console.log('Sorting by:', sortOption);
        const sortDirection = sortOption.includes('price') ? sortOption.split('_')[1] : 'asc';
        const sortField = sortOption.includes('price') ? 'price' : 'title';
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
    },[sortOption]);


    return (
        <FormControl className={styles.SortByCtn}>
            <InputLabel id="sort-label">Sort By</InputLabel>
            <Select
                labelId="sort-label"
                id="sort-select"
                value={sortOption}
                // onChange={handleSortChange}
                onChange={(event) => {setSortOption(event.target.value)}}
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