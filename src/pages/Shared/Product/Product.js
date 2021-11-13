import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions, Grid } from '@mui/material';
import { useHistory } from 'react-router';


const Product = ({ product, temp }) => {
    const { productName, img, _id } = product
    const history = useHistory();

    const handleBookButton = () => {
        history.push(`/placeOrder/${_id}`);
    }

    let AuthButton = null;
    if (temp === '1') {
        AuthButton = <></>
    }
    else {
        AuthButton = <Button variant="outlined" style={{ backgroundColor: "rgb(231, 76, 60 )", color: 'white' }} onClick={handleBookButton}>Book Now</Button>;
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
                    <Typography gutterBottom variant="h5" component="div">
                        {productName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    {AuthButton}
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Product;