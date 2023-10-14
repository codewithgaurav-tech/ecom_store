// import React from 'react';
// import { Container, Grid, Typography, Divider } from '@mui/material';
// import LocalShippingIcon from '@mui/icons-material/LocalShipping';
// import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
// import LoyaltyIcon from '@mui/icons-material/Loyalty';
// import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

// const ShippingInformation: React.FC = () => {
//     return (
//         <section id="shipping-information" className='Line'>
//             <Divider />
//             <Container>
//                 <Grid
//                     container
//                     spacing={3}
//                     justifyContent="space-between"
//                     alignItems="center"
//                     className='Line'
//                 >
//                     <Grid item md={3} sm={6}>
//                         <div className="icon-box">
//                             <LocalShippingIcon className="icon" />
//                             <Typography variant="h5">
//                                 <strong>Free shipping</strong> Over $200
//                             </Typography>
//                         </div>
//                     </Grid>
//                     <Grid item md={3} sm={6}>
//                         <div className="icon-box">
//                             <MonetizationOnIcon className="icon" />
//                             <Typography variant="h5">
//                                 <strong>Money back</strong> Return within 7 days
//                             </Typography>
//                         </div>
//                     </Grid>
//                     <Grid item md={3} sm={6}>
//                         <div className="icon-box">
//                             <LoyaltyIcon className="icon" />
//                             <Typography variant="h5">
//                                 <strong>Buy 4 get 5th</strong> 50% off
//                             </Typography>
//                         </div>
//                     </Grid>
//                     <Grid item md={3} sm={6}>
//                         <div className="icon-box">
//                             <HelpOutlineIcon className="icon" />
//                             <Typography variant="h5">
//                                 <strong>Any questions?</strong> experts are ready
//                             </Typography>
//                         </div>
//                     </Grid>
//                 </Grid>
//             </Container>
//             <Divider />
//         </section>
//     );
// };

// export default ShippingInformation;

import React from 'react';
import { Container, Grid, Typography, Divider } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
// import './ShippingInformation.css'; // Import the CSS file

const ShippingInformation: React.FC = () => {
    return (
        <section id="shipping-information" className='Line'>
            <Divider />
            <Container>
                <Grid
                    container
                    spacing={4}
                    className='Line center-content' // Add center-content class for alignment
                >
                    <Grid item md={3} sm={6}>
                        <div className="icon-box">
                            <LocalShippingIcon className="icon" />
                            <Typography variant="h5">
                                <strong>Free shipping</strong> Over $200
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item md={3} sm={6}>
                        <div className="icon-box">
                            <MonetizationOnIcon className="icon" />
                            <Typography variant="h5">
                                <strong>Money back</strong> Return within 7 days
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item md={3} sm={6}>
                        <div className="icon-box">
                            <LoyaltyIcon className="icon" />
                            <Typography variant="h5">
                                <strong>Buy 4 get 5th</strong> 50% off
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item md={3} sm={6}>
                        <div className="icon-box">
                            <HelpOutlineIcon className="icon" />
                            <Typography variant="h5">
                                <strong>Any questions?</strong> experts are ready
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <Divider />
        </section>
    );
};

export default ShippingInformation;

