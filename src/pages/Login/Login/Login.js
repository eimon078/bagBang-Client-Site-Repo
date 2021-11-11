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
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const { loginUser, signInWithGoogle } = useAuth()
    const [loginData, setLoginData] = React.useState({ email: "", password: "" })
    const location = useLocation()
    const history = useHistory()

    //Handle OnBlur
    const handleOnBlur = e => {
        const name = e.target.name;
        const value = e.target.value;
        const newValue = { ...loginData, [name]: value };
        setLoginData(newValue);
        console.log(newValue);

    }

    //Handle Google Login
    const handleGoogleLogin = () => {
        signInWithGoogle(location, history)
    }

    //Handle form submit
    const handleSubmit = e => {
        //user login
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    };
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Please Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        onBlur={handleOnBlur}
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        onBlur={handleOnBlur}
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        style={{ backgroundColor: "rgb(231, 76, 60 )", color: 'white' }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link to="/register" variant="body2">
                                <Box sx={{ pl: 6 }}>{"Don't have an account? Sign Up"}</Box>
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
                <Typography variant='h6'>----------------------or--------------------------</Typography>
                <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2, mb: 2 }}
                    style={{ backgroundColor: "rgb(231, 76, 60 )", color: 'white' }}
                    onClick={handleGoogleLogin}
                >
                    <GoogleIcon sx={{ pr: 1 }} />  Sign In with Google
                </Button>
            </Box>
        </Container>
    );
};

export default Login;