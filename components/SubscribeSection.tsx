import React from 'react';
import { Container, Grid, Typography, TextField, Button } from '@mui/material';

const SubscribeSection: React.FC = () => {
    return (
        <section id="subscribe" className="padding-large">
            <Container>
                <Grid container spacing={3}>
                    {/* Left Content */}
                    <Grid item md={6} className="block-text">
                        <div className="section-header">
                            <Typography variant="h2" className="section-title">
                                Get 25% off Discount Coupons
                            </Typography>
                        </div>
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst
                            amet, metus, sit massa posuere maecenas. At tellus ut nunc amet vel
                            egestas.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item md={6} className="subscribe-content">
                    <form id="form" className="d-flex justify-content-between">
                        <TextField
                            type="text"
                            name="email"
                            placeholder="Enter your email address here"
                            variant="outlined"
                            fullWidth
                        />
                        <Button variant="contained" className='SubscribeBtn'>
                            Subscribe Now
                        </Button>
                    </form>
                </Grid>
            </Container>
        </section>
    );
};

export default SubscribeSection;
