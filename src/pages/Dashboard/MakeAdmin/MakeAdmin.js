import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



const MakeAdmin = () => {
    const [email, setEmail] = React.useState('')

    //Handle OnBlur
    const handleOnBlur = e => {
        setEmail(e.target.value);
        console.log(email);

    }

    //Handle form submit
    const handleSubmit = e => {
        //set admin role
        const user = { email };
        fetch('https://powerful-headland-98764.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.modifiedCount > 0) {
                    alert("Made Admin Successfully");
                }
                else {
                    alert("Already Admin!");
                }
            })
        console.log('Submitted');
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
                <Typography component="h1" variant="h5">
                    Make Admin
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
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        style={{ backgroundColor: "rgb(231, 76, 60 )", color: 'white' }}
                    >
                        Make Admin
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default MakeAdmin;