import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Link, NavLink } from 'react-router-dom';
import { Button, Container } from '@material-ui/core';
import LogoutIcon from '@mui/icons-material/Logout';



const Header = () => {
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);


    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const linkColor = {
        color: 'black',
        textDecoration: "none"
    }
    const desktopLinkColor = {
        color: 'white',
        textDecoration: "none"
    }

    const mobileMenuId = 'primary-search-account-menu-mobile';

    //mobile responsive
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', m: 2, p: 2 }}>
                <MenuItem><Link style={linkColor} to="/">Home</Link></MenuItem>
                <MenuItem sx={{ p: 1 }}><Link style={linkColor} to="/products">Our Products</Link></MenuItem>
                <MenuItem><Link style={linkColor} to="/login">Login</Link></MenuItem>
                <MenuItem><Link style={linkColor} to="/dashboard">Dashboard</Link></MenuItem>
                <MenuItem><Typography>Eimon Hossain Tief</Typography> </MenuItem>
                <MenuItem><Button variant="outlined" style={{ backgroundColor: "rgb(231, 76, 60 )", color: 'white' }}><LogoutIcon style={{ color: "white" }} /> <LogoutIcon sx={{ pr: 1 }} />Logout</Button></MenuItem>
            </Box>
        </Menu>
    );
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: "rgb(245, 176, 65 )", color: 'black', textDecoration: 'none' }}>
                <Container>
                    <Toolbar>
                        <Typography
                            style={{ color: 'white' }}
                            variant="h5"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'block', sm: 'block' } }}
                        >
                            <span style={{ color: 'rgb(231, 76, 60 )', fontWeight: 'bold' }}>B</span>ag<span style={{ color: 'rgb(231, 76, 60 )', fontWeight: 'bold' }}>B</span>ang
                        </Typography>

                        <Box sx={{ flexGrow: 1 }} />

                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Typography sx={{ p: 1 }}><Link style={desktopLinkColor} to='/home'>Home</Link></Typography>
                            <Typography sx={{ p: 1 }}><Link style={desktopLinkColor} to='/products'>Our Products</Link></Typography>
                            <Typography sx={{ p: 1 }}><Link style={desktopLinkColor} to='/login'>Login</Link></Typography>
                            <Typography sx={{ p: 1 }}><Link style={desktopLinkColor} to="/dashboard">Dashboard</Link></Typography>
                            <Typography sx={{ p: 1 }} style={desktopLinkColor}>Eimon Hossain Taief</Typography>
                            <Typography sx={{ p: 1 }}><Button variant="outlined" style={{ backgroundColor: "rgb(231, 76, 60 )", color: 'white' }}><LogoutIcon sx={{ pr: 1 }} />Logout</Button></Typography>
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MenuIcon />
                                <LogoutIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            {renderMobileMenu}
        </Box>
    );
};

export default Header;