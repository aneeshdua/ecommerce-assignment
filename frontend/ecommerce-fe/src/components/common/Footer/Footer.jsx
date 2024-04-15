import { Typography } from '@mui/material';
import React from 'react';
import styles from './Footer.module.css';


const Footer = () => {
    return (
        <footer className={styles.FooterCtn}>
            <Typography>Ecommerce Pvt. Ltd. | Contact Us | About Us </Typography>
        </footer>
    );
};

export default Footer;