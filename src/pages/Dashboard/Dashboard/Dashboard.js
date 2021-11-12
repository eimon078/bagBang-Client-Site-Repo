import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import { NavLink } from 'react-router-dom';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';
import MyOrders from '../MyOrders/MyOrders';
import useAuth from '../../../hooks/useAuth';
import LogoutIcon from '@mui/icons-material/Logout';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';

const drawerWidth = 200;
const dashLink = { textDecoration: 'none', color: 'gray' };

const Dashboard = (props) => {
    const { window } = props;
    const { logout, admin } = useAuth();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    //Handle Logout
    const handleLogout = () => {
        console.log("clicked");
        logout();
    }
    let { path, url } = useRouteMatch();

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Link to='/home' style={dashLink}><Button color="inherit">Home</Button></Link>
                <Link to={`${url}`} style={dashLink}><Button color="inherit">Dashboard</Button></Link>
            </Box>
            {
                admin ? <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Link to={`${url}/makeAdmin`} style={dashLink}><Button color="inherit">Make Admin</Button></Link>
                    <Link to={`${url}/addProduct`} style={dashLink}><Button color="inherit">Add Product</Button></Link>
                </Box> : <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Link to={`${url}/myOrders`} style={dashLink}><Button color="inherit">My Orders</Button></Link>
                    <Link to={`${url}/review`} style={dashLink}><Button color="inherit">Review</Button></Link>
                </Box>
            }
            <Button variant="outlined" style={{ backgroundColor: "rgb(231, 76, 60 )", color: 'white' }} onClick={handleLogout}><LogoutIcon sx={{ pr: 1 }} style={{ color: "white" }} />Logout</Button>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Dashboard
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Toolbar />
                    <Switch>
                        <Route exact path={path}>
                            <Pay></Pay>
                        </Route>
                        <Route path={`${path}/review`}>
                            <Review></Review>
                        </Route>
                        <Route path={`${path}/myOrders`}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>
                        <Route path={`${path}/addProduct`}>
                            <AddProduct></AddProduct>
                        </Route>
                    </Switch>

                </Box>
            </Box>
        </div>
    );
};

export default Dashboard;