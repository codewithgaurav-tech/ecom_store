import React from 'react';
import {
    Container,
    Typography,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemText,
    Link,
    IconButton,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer: React.FC = () => {
    return (
        <footer id="footer">
            <Container>
                <div className="footer-menu-list">
                    <Grid container spacing={3}>
                        <Grid item lg={3} md={6} sm={6}>
                            <div className="footer-menu">
                                <Typography variant="h5" className="widget-title">
                                    Ultras
                                </Typography>
                                <List className="menu-list">
                                    <ListItem>
                                        <Link href="about.html">
                                            <ListItemText primary="About us" />
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link href="#">
                                            <ListItemText primary="Conditions" />
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link href="blog.html">
                                            <ListItemText primary="Our Journals" />
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link href="#">
                                            <ListItemText primary="Careers" />
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link href="#">
                                            <ListItemText primary="Affiliate Programme" />
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link href="#">
                                            <ListItemText primary="Ultras Press" />
                                        </Link>
                                    </ListItem>
                                </List>
                            </div>
                        </Grid>
                        <Grid item lg={3} md={6} sm={6}>
                            <div className="footer-menu">
                                <Typography variant="h5" className="widget-title">
                                    Customer Service
                                </Typography>
                                <List className="menu-list">
                                    <ListItem>
                                        <Link href="faqs.html">
                                            <ListItemText primary="FAQ" />
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link href="contact.html">
                                            <ListItemText primary="Contact" />
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link href="#">
                                            <ListItemText primary="Privacy Policy" />
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link href="#">
                                            <ListItemText primary="Returns & Refunds" />
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link href="#">
                                            <ListItemText primary="Cookie Guidelines" />
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link href="#">
                                            <ListItemText primary="Delivery Information" />
                                        </Link>
                                    </ListItem>
                                </List>
                            </div>
                        </Grid>
                        <Grid item lg={3} md={6} sm={6}>
                            <div className="footer-menu">
                                <Typography variant="h5" className="widget-title">
                                    Contact Us
                                </Typography>
                                <Typography>
                                    Do you have any questions or suggestions?{' '}
                                    <Link href="#" className="email">
                                        ourservices@ultras.com
                                    </Link>
                                </Typography>
                                <Typography>
                                    Do you need assistance? Give us a call. <br />
                                    <strong>+57 444 11 00 35</strong>
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item lg={3} md={6} sm={6}>
                            <div className="footer-menu">
                                <Typography variant="h5" className="widget-title">
                                    Forever 2018
                                </Typography>
                                <Typography>
                                    Cras mattis sit ornare in metus eu amet adipiscing enim.
                                    Ullamcorper in orci, ultrices integer eget arcu. Consectetur
                                    leo dignissim lacus, lacus sagittis dictumst.
                                </Typography>
                                <div className="social-links">
                                    <ul className="d-flex list-unstyled">
                                        <li>
                                            <IconButton>
                                                <FacebookIcon />
                                            </IconButton>
                                        </li>
                                        <li>
                                            <IconButton>
                                                <TwitterIcon />
                                            </IconButton>
                                        </li>
                                        <li>
                                            <IconButton>
                                                <YouTubeIcon />
                                            </IconButton>
                                        </li>
                                        {/* <li>
                                            <IconButton>
                                                <BehanceSquareIcon />
                                            </IconButton>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <Divider />
            </Container>
        </footer>
    );
};

export default Footer;
