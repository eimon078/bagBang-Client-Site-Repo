import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from '../../Shared/Product/Product';

const ManageProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {

        fetch('https://powerful-headland-98764.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])


    //handle delete products
    const handleDelete = (id) => {
        const procced = window.confirm("Are You sure to Delete?");
        if (procced) {
            const url = `https://powerful-headland-98764.herokuapp.com/products/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount === 1) {
                        alert('Delete Successfully');
                        const remainingProducts = products.filter(product => product._id !== id);
                        setProducts(remainingProducts);
                    }
                })
        }

    }

    return (
        <div>

            <h1>Manage Product</h1>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, md: 12 }}>
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                            handleDelete={handleDelete}
                            temp='2'
                        ></Product>)
                    }
                </Grid>
            </Container>

        </div>
    );
};

export default ManageProducts;