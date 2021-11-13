import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import DisplayReview from '../DisplayReview/DisplayReview';

const DisplayReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:7000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                console.log(data);
            })

    }, [])
    return (
        <div>
            <Box sx={{ my: 4 }}> <h1>CUSTOMER REVIEWS</h1></Box>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, md: 12 }}>
                    {
                        reviews.map(review => <DisplayReview
                            key={review._id}
                            review={review}
                        ></DisplayReview>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default DisplayReviews;