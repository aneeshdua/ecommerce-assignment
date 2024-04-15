import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import styles from './ProductCard.module.css';
import { ProductRating } from '../../../common/ProductRating/ProductRating';


export const ProductCard = ({ id,imageUrl,title, description, price, rating }) => {
	return (
		<Card className={styles.ProductCardCtn} >
			<CardActionArea href={`/${id}`} >
				<CardMedia
					className={styles.ProductCardMedia}
					component="img"
					image={imageUrl}
					title={title}
				/>
				<CardContent className={styles.ProductCardTextCtn}>
					<Typography gutterBottom variant="h5" component="div">
						{title}
					</Typography>
					<ProductRating
						rating={rating}
					/>
					<Typography variant="body2" color="text.secondary">
						{"$"+price}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{description}
					</Typography>
					
				</CardContent>
			</CardActionArea>
				
		</Card>
	);
};