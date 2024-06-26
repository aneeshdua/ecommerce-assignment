
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import React, { useContext } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import styles from './CatalogFilter.module.css';
import { getFilteredProducts } from '../../../../api/api';
import { CatalogContext } from '../../../layouts/ListingPage/ListPage';
import { DEFAULT_SORT } from '../../../../constants/constants';

const CatalogFilter = ({ filterTypes,filterList,searchText, setSortOption  }) => {
    // const [filterObj, setFilterObj] = React.useState({});//[type: [filter1, filter2, ...]
    
    const {setCatalogData, pageDataUpdateHandler,filterObj,setFilterObj} = useContext(CatalogContext);
    const filterBoxHandler = (event,type) => {
        let temp = filterObj;
        if (event.target.checked) {
            if (temp[type]) {
                temp[type].push(event.target.value);
            } else {
                temp[type] = [event.target.value];
            }
        } else {
            temp[type] = temp[type].filter((filter) => filter !== event.target.value);
        }
        setFilterObj(temp);
        setSortOption(DEFAULT_SORT);
        if (Object.keys(temp).length !== 0) {
            let body = {};
            body['searchQuery'] = searchText;
            body['brands'] = temp['brands'] ? temp['brands'] : [];
            body['categories'] = temp['categories'] ? temp['categories'] : [];
            getFilteredProducts(body).then((data) => {
                setCatalogData(data);
                pageDataUpdateHandler(data);    
            });
        }
    };

    const isCheckedHandler = (type,filter) => {
        return filterObj && filterObj[type] && filterObj[type].includes(filter) ? true : false;
    };
    const getFilterComponents = () => {
        return (
            <>
                {filterTypes.map((type) => {
                    return (
                        <Accordion key={type}>
                            <AccordionSummary
                                expandIcon={<ArrowDropDownIcon/>}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography>{type}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <FormGroup>
                                    {filterList[type] && filterList[type].map((filter) => {
                                        return (
                                            <FormControlLabel 
                                                key={filter}
                                                control={
                                                    <Checkbox 
                                                        onChange={(event) => filterBoxHandler(event, type)}
                                                        value={filter}
                                                        checked={isCheckedHandler(type,filter)}
                                                    />
                                                }
                                                label={filter}
                                            />
                                        );
                                    })}
                                </FormGroup>
                            </AccordionDetails>
                        </Accordion>
                    );

                })}
            </>
        );
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }} className={styles.FilterBarCtn}>
            <Typography variant="h6">Filters</Typography>
            {filterList && Object.keys(filterList) && getFilterComponents()}
        </div>
    );
};

export default CatalogFilter;