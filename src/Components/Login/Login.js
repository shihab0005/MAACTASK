import { Box, Button, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useContext, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Context from '../Context/Context';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';

const Login = () => {
    const history = useHistory()
    const [loginData, setLoginData] = useState({});
    const { setUserData } = useContext(Context);
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    }

    const handleSubmit = e => {

        fetch('https://staging-api.erpxbd.com/api/v1/users/login', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(loginData)
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                localStorage.setItem('token', data.token)
                setUserData(data.user)

                if (data.token) {
                    alert("Login Successfully");
                    history.push("/dashboard");
                }
            })

        e.preventDefault()
    }
    return (
        <>
            <Nav />
            <Container sx={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                backgroundColor: "#DFE3E0",

            }}>

                <Box sx={{ p: 5 }}>

                    <Typography sx={{ fontSize: 30, fontWidth: 700, textAlign: "center", mt: 3 }}>Welcome Back</Typography>
                    <Typography variant="body1" sx={{ textAlign: "center", mb: 2 }}>Please Login to Your Account</Typography>

                    <form onSubmit={handleSubmit} >


                        <TextField
                            sx={{ width: "60%", m: 1, mx: 30 }}
                            id="standard-basic3"
                            label="Your ID"
                            name="employeeId"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <TextField
                            sx={{ width: "60%", m: 1, mx: 30 }}
                            id="standard-basic5"
                            label="Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" />




                        <Button
                            sx={{ width: "60%", backgroundColor: "#0052CC", m: 1, mx: 30 }} type="submit"
                            variant="contained"

                        >Login</Button>
                        <NavLink style={{
                            textDecoration: "none",

                        }}
                            to="/registration">
                            <Button sx={{ mx: 50, }} variant="text">New User ? Please Register</Button>
                        </NavLink>
                    </form>
                </Box>

            </Container>

            <Footer />
        </>
    );
};

export default Login;