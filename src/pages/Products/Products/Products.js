import React, { useEffect, useState } from 'react';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import { Container, Grid } from '@mui/material';
import Product from '../../Shared/Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch('http://localhost:7000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                console.log(data);
            })
    }, [])
    return (
        <div>
            <Header></Header>
            <h1>Our Products</h1>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, md: 12 }}>
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </Grid>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Products;