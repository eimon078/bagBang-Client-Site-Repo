import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions, Grid } from '@mui/material';
import { useHistory } from 'react-router';
import { Box } from '@mui/system';


const Product = ({ product, temp, handleDelete }) => {
    const { productName, img, _id, description, price, model, brand } = product
    const history = useHistory();

    const handleBookButton = () => {
        history.push(`/placeOrder/${_id}`);
    }

    //Conditional Button Rendering
    let AuthButton = null;
    if (temp === '1') {
        AuthButton = <></>
    }
    else if (temp === '2') {
        AuthButton = AuthButton = <Button variant="outlined" style={{ backgroundColor: "rgb(231, 76, 60 )", color: 'white' }} onClick={() => handleDelete(_id)}>Delete Product</Button>;
    }
    else {
        AuthButton = <Button variant="outlined" style={{ backgroundColor: "rgb(231, 76, 60 )", color: 'white' }} onClick={handleBookButton}>Buy Now</Button>;
    }


    return (
        <Grid item xs={12} md={3}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    // height="140"
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Box sx={{ typography: 'subtitle2', textAlign: 'left', fontWeight: 'bold', py: 2 }}>{productName}</Box>
                    <Typography variant="body2" textAlign='left'>
                        {description}
                    </Typography>
                    <Box sx={{ typography: 'body2', textAlign: 'left', pt: 1 }}>Model: {model}</Box>
                    <Box sx={{ typography: 'body2', textAlign: 'left' }}>Model: {brand}</Box>
                    <Box sx={{ typography: 'subtitle2', textAlign: 'left', fontWeight: 'bold' }}>Price: {price}</Box>
                </CardContent>
                <CardActions>
                    {AuthButton}
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Product;