import React from 'react';
import { Rating, Typography } from '@mui/material';
import styles from './ProductRating.module.css';

export const ProductRating = ({ rating }) => {
	return (
		<div className={styles.ProductRatingCtn}>
			<Rating
				name="product-rating"
				value={rating}
				precision={0.5}
				readOnly={true}
			/>
			<Typography variant="body2" color="text.secondary">
				{`(${rating})`}
			</Typography>
		</div>
	);
};
