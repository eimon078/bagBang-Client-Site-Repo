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

const Register = () => {
    const { registerUser } = useAuth();
    const [passwordError, setPasswordError] = React.useState(false);
    const history = useHistory()
    const [registerData, setRegisterData] = React.useState({ email: "", password: "", userName: "" })

    //Handle OnBlur
    const handleOnBlur = e => {
        const name = e.target.name;
        const value = e.target.value;
        const newValue = { ...registerData, [name]: value };
        setRegisterData(newValue);
        console.log(newValue);

    }

    //HandleSubmit
    const handleSubmit = e => {
        if (registerData.password.length < 6) {
            setPasswordError(true);
            e.preventDefault();
            return;
        }
        setPasswordError(false);
        //user register
        registerUser(registerData.email, registerData.password, registerData.userName, history);
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
                    Please Register
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required={true}
                        fullWidth
                        onBlur={handleOnBlur}
                        id="userName"
                        label="Your Name"
                        name="userName"
                        autoComplete="given-name"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required={true}
                        fullWidth
                        onBlur={handleOnBlur}
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                    />
                    {passwordError && <Alert severity="error">This is an error alert — check it out!</Alert>}
                    <TextField
                        margin="normal"
                        required={true}
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
                        Register
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link to="/login" variant="body2">
                                <Box sx={{ pl: 6 }}>{"Already have an account? Sign In"}</Box>
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default Register;