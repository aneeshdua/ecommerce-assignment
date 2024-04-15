import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../../../api/api';
import styles from './ProductPage.module.css';
import { Container, Grid, Typography } from '@mui/material';
import { ProductRating } from '../../common/ProductRating/ProductRating';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    useEffect(() => {
        fetchProduct(id).then((data) => {
            setProduct(data);
        });
        
    }, [id]);

    return (
        <div className={styles.ImageGalleryCtn}>
            {product ? (
                <Grid container className={styles.ProductPageCtn} >
                    
                    <Grid item xs={10} md={5} className={styles.ImageGalleryCtn}>
						<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
							{product.images.map((image, index) => (
								<SwiperSlide key={index}>
									<img src={image} alt={product.title} className={styles.ImageGalleryImg} />
								</SwiperSlide>
							))}
						</Swiper>
                        
                    </Grid>
                    <Grid item xs={10} md={5}>
                        <Container className={styles.ProductInfoCtn}>
                            <Typography gutterBottom variant="h3" component="div">
                                {product.title}
                            </Typography>
                            <ProductRating
                                className={styles.ProductRatingCtn}
                                rating={product.rating}
                            />
                            <Typography variant="h4" className={styles.ProductPriceTxt}>
                                {"$"+product.price+"("+product.discountPercentage+"% off)"}
                            </Typography>
                            <Typography variant="h5" >
                                {product.category+" | "+product.brand}
                            </Typography>
                            <Typography variant="body2" >
                                {"Product Description:  "+product.description}
                            </Typography>
                            <Typography variant="body2" >
                                {product.stock+" units left in stock"}
                            </Typography>
                            
                        </Container>
                    </Grid>
                    
                    
            </Grid>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ProductPage;