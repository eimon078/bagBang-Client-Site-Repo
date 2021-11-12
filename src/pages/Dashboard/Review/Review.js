import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const [reviewData, setReviewData] = React.useState({ reviewText: "", rating: "" })
    const { user } = useAuth();

    //Handle OnBlur
    const handleOnBlur = e => {
        // console.log(e.target.value);
        const name = e.target.name;
        const value = e.target.value;
        setReviewData({ ...reviewData, [name]: value });
        console.log(reviewData);



    }

    //Handle form submit
    const handleSubmit = e => {
        //set admin role
        const displayName = user.displayName;
        const email = user.email;
        const userReview = { ...reviewData, displayName, email }
        fetch('http://localhost:7000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        // console.log('Submitted');
        const num = parseInt(reviewData.rating, 10);
        console.log(num, 'ok');
        // console.log(reviewData);
        e.preventDefault();
    };
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Please Give Your Review
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                    <TextField
                        margin="normal"
                        id="outlined-multiline-static"
                        label="Review*"
                        name="reviewText"
                        onBlur={handleOnBlur}
                        required={true}
                        autoFocus
                        fullWidth
                        multiline
                        rows={4}

                    />
                    <TextField
                        margin="normal"
                        required={true}
                        fullWidth
                        onBlur={handleOnBlur}
                        id="Number"
                        label="Raring"
                        InputProps={{
                            inputProps: {
                                type: 'number',
                                min: 0, max: 5,
                            },
                        }}
                        // inputProps={{ inputMode: 'numeric', pattern: '[0-5]' }}
                        name="rating"
                    // autoComplete="email"

                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        style={{ backgroundColor: "rgb(231, 76, 60 )", color: 'white' }}
                    >
                        Make Admin
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Review;