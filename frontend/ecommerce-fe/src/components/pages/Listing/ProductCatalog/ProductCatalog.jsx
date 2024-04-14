import { Container, Pagination, Stack } from '@mui/material';
import React, { useContext } from 'react';
import styles from './ProductCatalog.module.css';
import { ProductCard } from '../../../common/ProductCard/ProductCard';


const ProductCatalog = ({ catalogPage,totalPages,paginationHandler }) => {

    const getProductCards = () => {
        if (!catalogPage) {
            return null;
        }
        
        const productCards = [];
        for (let i = 0; i < catalogPage.length; i++) {
            const product = catalogPage[i];
            productCards.push(
                <ProductCard
                    key={product.id}
                    id={product.id}
                    imageUrl={product.thumbnail}
                    description={product.description}
                    title={product.title}
                    price={product.price}
                    rating={product.rating}
                />
            );
        }
        return productCards;
    };


    return (
        <>
            {catalogPage && catalogPage.length !== 0 &&
                <Container className={styles.CatalogCtn}>
                    <div className={styles.ProductCardsCtn}>{getProductCards()}</div>
                    
                    <Stack spacing={2} className={styles.PaginationCtn}>
                        <Pagination
                            count={totalPages}
                            size="large"
                            onChange={paginationHandler}
                        />
                    </Stack>
                </Container>
            }
        </>
    );
};

export default ProductCatalog;