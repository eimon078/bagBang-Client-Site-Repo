import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/404.png'

const NotFound = () => {
    return (
        <div>
            <img style={{ height: "600px", width: "100%" }} src={notFound} alt="" />
            <Link to='/home' sx={{ color: 'warning.main' }}><Button variant="outlined" style={{ backgroundColor: "rgb(231, 76, 60 )", color: 'white' }}>Go Back Home</Button></Link>
        </div>
    );
};

export default NotFound;