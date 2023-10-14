import React, { useState } from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { ArrowForward, FavoriteBorder } from '@mui/icons-material';
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';

interface FeaturedProduct {
    imageUrl: string;
    title: string;
    price: string;
}
// ... (FeaturedProduct and featuredProducts definitions remain the same)
const featuredProducts: FeaturedProduct[] = [
    {
        imageUrl: '/product-item1.jpg',
        title: 'Full sleeve cover shirt',
        price: '$40.00',
    },
    {
        imageUrl: '/product-item2.jpg',
        title: 'Volunteer Half blue',
        price: '$38.00',
    },
    {
        imageUrl: '/product-item3.jpg',
        title: 'Double yellow shirt',
        price: '$44.00',
    },
    {
        imageUrl: '/product-item4.jpg',
        title: 'Long belly grey pant',
        price: '$33.00',
    },
    // Add more products as needed
];


const itemsPerPage = 4; // Number of items in the first row

const Products: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePaginationClick = (page: number) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage === 1 ? startIndex + itemsPerPage : featuredProducts.length;

    const displayedProducts = featuredProducts.slice(startIndex, endIndex);

    return (
        <section id="featured-products" className="product-store padding-large">
            <Container>
                <Grid container spacing={3}>
                    {displayedProducts.map((product, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <div className="product-item">
                                <div className="image-holder">
                                    <img
                                        src={product.imageUrl}
                                        alt={product.title}
                                        className="product-image"
                                    />
                                </div>
                                <div className="cart-concern">
                                    <div className="cart-button d-flex justify-content-between align-items-center">
                                        <Button
                                            variant="text"
                                            className="btn-wrap cart-link d-flex align-items-center"
                                        >
                                            Add to cart
                                            <ArrowForward />
                                        </Button>
                                        <Button
                                            variant="text"
                                            className="view-btn tooltip d-flex"
                                        >
                                            <CenterFocusStrongIcon />
                                            <span className="tooltip-text">Quick view</span>
                                        </Button>
                                        <Button variant="text" className="wishlist-btn">
                                            <FavoriteBorder />
                                        </Button>
                                    </div>
                                </div>
                                <div className="product-detail">
                                    <Typography variant="h3" className="product-title">
                                        <a href="single-product.html">{product.title}</a>
                                    </Typography>
                                    <Typography variant="body1" className="item-price text-primary">
                                        {product.price}
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                    ))}
                </Grid>
                <div className="pagination-container">
                    {Array.from(
                        { length: Math.ceil(featuredProducts.length / itemsPerPage) },
                        (_, i) => (
                            <span
                                key={i}
                                className={`pagination-dot ${i + 1 === currentPage ? 'active' : ''}`}
                                onClick={() => handlePaginationClick(i + 1)}
                            ></span>
                        )
                    )}
                </div>
            </Container>
        </section>
    );
};

export default Products;
