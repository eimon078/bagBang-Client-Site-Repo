import { Grid, Paper } from '@mui/material';
import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import { Box } from '@mui/system';
import Rating from '@material-ui/lab/Rating';
// import Box from '@material-ui/core/Box';

const DisplayReview = ({ review }) => {
    const { displayName, reviewText, rating } = review
    return (
        <Grid item xs={12} md={3}>
            <Paper elevation={3} >
                <Box sx={{ typography: 'subtitle2', textAlign: 'left', p: 1 }}><span style={{ marginRight: '4', paddingRight: '2' }}><PersonIcon /></span>{displayName}</Box>
                <Box sx={{ typography: 'subtitle2', textAlign: 'left', px: 1, py: 1 }}>{reviewText}</Box>
                <Box align="left" mb={1} borderColor="transparent">
                    <Rating
                        value={rating}
                        name="rating"
                        readOnly="true"
                    />
                </Box>
            </Paper>
        </Grid>
    );
};

export default DisplayReview;