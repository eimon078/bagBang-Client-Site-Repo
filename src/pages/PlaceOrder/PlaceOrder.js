import { Button, Container, CssBaseline, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Product from '../Shared/Product/Product';

const PlaceOrder = () => {
    const { orderId } = useParams();
    const history = useHistory();
    const [product, setProduct] = useState({});
    const [orderData, setOrderData] = useState({})
    const { user } = useAuth()

    const displayName = user.displayName;
    const email = user.email;

    useEffect(() => {

        fetch(`https://powerful-headland-98764.herokuapp.com/products/${orderId}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [])



    //Handle OnBlur
    const handleOnBlur = e => {
        const name = e.target.name;
        const value = e.target.value;
        const newValue = { ...orderData, [name]: value };
        setOrderData(newValue);

    }

    //HandleSubmit
    const handleSubmit = e => {
        const { _id, img, ...exceptId } = product;

        fetch('https://powerful-headland-98764.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ ...orderData, ...exceptId, displayName, email, status: 'pending' })
        })
            .then(res => res.json())
            .then(data => {
                alert('Order Successfully')
                history.push('/products')
            })

        e.preventDefault();
    };

    return (
        <div>
            <Header></Header>
            <Container sx={{ my: 4 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, md: 12 }}>
                    <Product product={product} temp='1'></Product>
                    <Grid item xs={12} md={9}>
                        <Container component="main" maxWidth="xs">
                            <CssBaseline />
                            <Box
                                sx={{
                                    // marginTop: 4,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Typography component="h1" variant="h5">
                                    Place Your Order
                                </Typography>
                                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        disabled
                                        defaultValue={displayName}
                                        id="Name"
                                        label="Name"
                                        name="displayName"
                                        autoComplete="given-name"
                                    />
                                    <TextField
                                        margin="normal"
                                        disabled
                                        required
                                        fullWidth
                                        defaultValue={email}
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                    />
                                    <TextField
                                        onBlur={handleOnBlur}
                                        margin="normal"
                                        name="address"
                                        required
                                        fullWidth
                                        id="address"
                                        label="Address"
                                        autoFocus
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        onBlur={handleOnBlur}
                                        id="phone"
                                        label="Phone Number"
                                        InputProps={{
                                            inputProps: {
                                                type: 'number',
                                            },
                                        }}
                                        name="phone"
                                        autoComplete="phone"

                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        onClick={handleSubmit}
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                        style={{ backgroundColor: "rgb(231, 76, 60 )", color: 'white' }}
                                    >
                                        Confirm Order
                                    </Button>
                                </Box>
                            </Box>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default PlaceOrder;