import React from 'react';
import { Container, Grid, Typography, Button } from '@mui/material';
import EastIcon from '@mui/icons-material/East';

const LatestCollection: React.FC = () => {
    return (
        <section id="latest-collection">
            <Container>
                <Grid container spacing={3} className="product-collection">
                    {/* Left Content */}
                    <Grid item lg={7} md={12} className="left-content">
                        <div className="collection-item">
                            <div className="products-thumb">
                                <img
                                    src="images/collection-item1.jpg"
                                    alt="collection item"
                                    className="large-image image-rounded"
                                />
                            </div>
                            <Grid
                                container
                                className="product-entry"
                                lg={6}
                                md={6}
                                sm={6}
                                spacing={2}
                            >
                                <Grid item xs={12}>
                                    <Typography variant="subtitle1" className="categories">
                                        Casual Collection
                                    </Typography>
                                    <Typography variant="h3" className="item-title">
                                        Street Wear.
                                    </Typography>
                                    <Typography variant="body1">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Dignissim massa diam elementum.
                                    </Typography>
                                    <div className="btn-wrap">
                                        <Button
                                            variant="text"
                                            color="secondary"
                                            className="d-flex align-items-center"
                                            href="shop.html"
                                        >
                                            Shop Collection
                                            <EastIcon />
                                        </Button>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>

                    {/* Right Content */}
                    <Grid item lg={5} md={12} className="right-content flex-wrap">
                        {/* Top Item */}
                        <div className="collection-item top-item">
                            <div className="products-thumb">
                                <img
                                    src="images/collection-item2.jpg"
                                    alt="collection item"
                                    className="small-image image-rounded"
                                />
                            </div>
                            <Grid container className="product-entry" md={6} spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="subtitle1" className="categories">
                                        Basic Collection
                                    </Typography>
                                    <Typography variant="h3" className="item-title">
                                        Basic Shoes.
                                    </Typography>
                                    <div className="btn-wrap">
                                        <Button
                                            variant="text"
                                            color="primary"
                                            className="d-flex align-items-center"
                                            href="shop.html"
                                        >
                                            Shop Collection
                                            <EastIcon />
                                        </Button>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>

                        {/* Bottom Item */}
                        <div className="collection-item bottom-item">
                            <div className="products-thumb">
                                <img
                                    src="images/collection-item3.jpg"
                                    alt="collection item"
                                    className="small-image image-rounded"
                                />
                            </div>
                            <Grid container className="product-entry" md={6} spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="subtitle1" className="categories">
                                        Best Selling Product
                                    </Typography>
                                    <Typography variant="h3" className="item-title">
                                        Woolen Hat.
                                    </Typography>
                                    <div className="btn-wrap">
                                        <Button
                                            variant="text"
                                            color="primary"
                                            className="d-flex align-items-center"
                                            href="shop.html"
                                        >
                                            Shop Collection
                                            <EastIcon />
                                        </Button>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default LatestCollection;
