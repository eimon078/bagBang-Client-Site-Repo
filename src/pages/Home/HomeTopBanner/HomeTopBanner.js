import { Button, Container, Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import topBannerPic from '../../../images/banner_pic_4.jpg'

const HomeTopBanner = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={7}>
                    <Box sx={{ height: 400 }}>
                        <img style={{ width: "100%", height: '100%' }} src={topBannerPic} alt=""></img>
                    </Box>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', height: 400 }}>
                        <Box>
                            <Box sx={{ mb: 3 }}><Typography variant="h6" >BagBang 2021</Typography></Box>
                            <Typography variant="h4">The Gift Suite</Typography>
                            <Typography variant="subtitle1" sx={{ lineHeight: 2 }}>Gift Yourself different kind of bag <br /> for upcoming semester,year and school. </Typography>
                            <Box sx={{ width: "75%", mx: "auto", mt: 2 }}><Link style={{ color: 'black', textDecoration: "none" }} to='/products'><Button variant="outlined" style={{ backgroundColor: "rgb(231, 76, 60 )", color: 'white', width: "100%" }}>Explore</Button></Link></Box>
                        </Box>
                    </Box>

                </Grid>
            </Grid>
        </Container>
    );
};

export default HomeTopBanner;