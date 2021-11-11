import { Container, Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const footerHeadingColor = {
        color: 'black',
        textDecoration: "none"
    }
    return (
        <div>
            <Box
                px={{ xs: 3, md: 5 }}
                py={{ xs: 5, md: 5 }}
                style={{ backgroundColor: "rgb(245, 176, 65 )", color: 'black', textDecoration: 'none' }}
            >
                <Container >
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={4}>
                            <Box borderBottom={1}><Typography style={{ color: 'White' }} variant="h6">Quick Link</Typography></Box>
                            <Box>
                                <Link style={footerHeadingColor} to="/">Home</Link>
                            </Box>
                            <Box>
                                <Link style={footerHeadingColor} to="/login">Login</Link>
                            </Box>
                            <Box>
                                <Link style={footerHeadingColor} to="/register">Register</Link>
                            </Box>
                            <Box>
                                <Link style={footerHeadingColor} to="/products">Products</Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box borderBottom={1} ><Typography style={{ color: 'White' }} variant="h6">Customer Services</Typography></Box>
                            <Box>
                                <Typography>Your Account</Typography>
                            </Box>
                            <Box>
                                <Typography>Track Order</Typography>
                            </Box>
                            <Box>
                                <Typography>How to place an Order</Typography>
                            </Box>
                            <Box>
                                <Typography>EMI</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box borderBottom={1}><Typography style={{ color: 'White' }} variant="h6">Contact Us</Typography></Box>
                            <Box>
                                <Typography>+880 123-456-7890</Typography>
                            </Box>
                            <Box>
                                <Typography>example@gmail.com</Typography>
                            </Box>
                            <Box>
                                <Typography>(Saturday-Thursday between 10 AM - 7 PM)</Typography>
                            </Box>
                            <Box>
                                <Typography>Lakshmipur Sadar, Lakshmipur</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default Footer;