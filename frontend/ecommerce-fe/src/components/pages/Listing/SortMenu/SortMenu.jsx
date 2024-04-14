import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { sortOptions } from '../../../../constants/constants';
import styles from './SortMenu.module.css';
const SortMenu = () => {
    const [sortOption, setSortOption] = React.useState('');

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
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