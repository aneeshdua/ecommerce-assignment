import styles from './ListPage.module.css';
import {Grid} from '@mui/material';
import React, { createContext, useEffect } from 'react';

import CatalogFilter from '../../pages/Listing/Filter/CatalogFilter';
import SearchBar from '../../pages/Listing/SearchBar/SearchBar';
import { fetchFullCatalog, getFilterValues } from '../../../api/api';

import { filterTypes } from '../../../constants/constants';
import ProductCatalog from '../../pages/Listing/ProductCatalog/ProductCatalog';
import SortMenu from '../../pages/Listing/SortMenu/SortMenu';

export const CatalogContext = createContext({
    catalogData: [],
    setCatalogData: () => {},
});

const ListPage = () => {
    const [catalogData, setCatalogData] = React.useState([]);
    const [catalogPage, setCatalogPage] = React.useState([]);
    const [totalPages, setTotalPages] = React.useState(0);
    const [filterList, setFilterList] = React.useState({});
    
    useEffect(() => {
        fetchFullCatalog().then((data) => {
            setCatalogData(data);
            setCatalogPage(data.slice(0, 10));
            setTotalPages(Math.ceil(data.length / 10));
        });
        filterTypes.forEach((type) => {
            getFilterValues(type).then((data) => {
                let temp = filterList;
                temp[type] = data;
                setFilterList(temp);
            });
        });
    },[]);

    const paginationHandler = (event, value) => {
        const start = (value - 1) * 10;
        const end = start + 10;
        setCatalogPage(catalogData.slice(start, end));
    };

    const pageDataUpdateHandler = (data) => {
        setCatalogPage(data.slice(0, 10));
        setTotalPages(Math.ceil(data.length / 10));
    };

    return (
        <>
            <CatalogContext.Provider value={{
                catalogData:catalogData,
                setCatalogData: setCatalogData,
                pageDataUpdateHandler: pageDataUpdateHandler,
            }}
            >
                <SearchBar/>
                <Grid container>
                    <Grid item xs={2} md={2} className={styles.FilterBarCtn}>
                        <CatalogFilter filterTypes={filterTypes} filterList={filterList}/>
                    </Grid> 
                    
                    <Grid item xs={10} md={10}>
                        <div className={styles.SortMenuCtn}>
                            <SortMenu/>
                        </div>
                        <ProductCatalog
                            catalogPage={catalogPage}
                            totalPages={totalPages}
                            paginationHandler={paginationHandler}
                        />
                    </Grid>
                </Grid>
            </CatalogContext.Provider>
        </>
    );
};

export default ListPage;