import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useProducts from '../../../hooks/useProducts';
import Product from '../../Shared/Product/Product';

const HomeProducts = () => {
    const products = useProducts();
    return (
        <div>
            <Box sx={{ my: 4 }}> <h1>OUR PRODUCTS</h1></Box>

            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, md: 12 }}>
                    {
                        products.slice(0, 6).map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default HomeProducts;