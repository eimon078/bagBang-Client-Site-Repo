import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Alert } from '@mui/material';
import { useHistory } from 'react-router';

const AddProduct = () => {

    const [productData, setProductData] = React.useState({})

    //Handle OnBlur
    const handleOnBlur = e => {
        const name = e.target.name;
        const value = e.target.value;
        const newValue = { ...productData, [name]: value };
        setProductData(newValue);
        console.log(newValue);

    }

    //HandleSubmit
    const handleSubmit = e => {

        fetch('http://localhost:7000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('Product Added')
            })

        e.preventDefault();
    };
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Add a Product
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required={true}
                        fullWidth
                        onBlur={handleOnBlur}
                        id="productName"
                        label="Product Name"
                        name="productName"
                        autoComplete="given-name"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required={true}
                        fullWidth
                        onBlur={handleOnBlur}
                        id="img"
                        label="Img Url"
                        name="img"
                        autoComplete="given-name"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        id="outlined-multiline-static"
                        label="Description*"
                        name="description"
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
                        label="Price"
                        InputProps={{
                            inputProps: {
                                type: 'number',
                                min: 0,
                            },
                        }}
                        // inputProps={{ inputMode: 'numeric', pattern: '[0-5]' }}
                        name="price"
                    // autoComplete="email"

                    />
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                onBlur={handleOnBlur}
                                margin="normal"
                                name="model"
                                required
                                fullWidth
                                id="model"
                                label="Product Model"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                onBlur={handleOnBlur}
                                margin="normal"
                                required
                                fullWidth
                                id="brand"
                                label="Brand Name"
                                name="brand"
                            />
                        </Grid>
                    </Grid>


                    {/* {passwordError && <Alert severity="error">This is an error alert — password atleast 6 charcter!</Alert>} */}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        style={{ backgroundColor: "rgb(231, 76, 60 )", color: 'white' }}
                    >
                        Add Product
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default AddProduct;