import { Box, Button, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';

import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';

const Registration = () => {
    const [registerData, setRegisterData] = useState({});

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData }
        newRegisterData[field] = value;
        console.log(newRegisterData);
        setRegisterData(newRegisterData);
    }

    const handleSubmit = e => {
        if (registerData.password !== registerData.passwordConfirm) {
            alert("Password Not Match. Please Check");
            return;
        }

        fetch("https://staging-api.erpxbd.com/api/v1/users/signup", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(registerData)
        }).then(res => res.json())
            .then(data => {
                console.log(data)

                localStorage.setItem("token", data.token);

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

                    <Typography sx={{ fontSize: 30, fontWidth: 700, textAlign: "center", mt: 3 }}>Create Account</Typography>
                    <Typography variant="body1" sx={{ textAlign: "center", mb: 2 }}>Fill in the details below to create an account</Typography>

                    <form onSubmit={handleSubmit} >

                        <TextField
                            sx={{ width: "60%", m: 1, mx: 30 }}
                            id="standard-basic1"
                            label="Enter Your Full Name"
                            name="name"
                            type="text"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <TextField
                            sx={{ width: "60%", m: 1, mx: 30 }}
                            id="standard-basic2"
                            label="Enter Your Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <TextField
                            sx={{ width: "60%", m: 1, mx: 30 }}
                            id="standard-basic3"
                            label="Your ID"
                            name="employeeId"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <TextField
                            sx={{ width: "60%", m: 1, mx: 30 }}
                            id="standard-basic4"
                            label="Your Mobile Number"
                            name="phone"
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

                        <TextField
                            sx={{ width: "60%", m: 1, mx: 30 }}
                            id="standard-basic6"
                            label="Confirm Password"
                            type="password"
                            name="passwordConfirm"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        {/* <FormControl sx={{ width: "60%", m: 1, mx: 30 }}>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                Select Your Role
                            </InputLabel>
                            <NativeSelect
                                defaultValue={30}
                                inputProps={{
                                    name: 'role',
                                    id: 'uncontrolled-native',

                                }}
                            >
                                <option value={10}>Ten</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                            </NativeSelect>
                        </FormControl> */}

                        <Button
                            sx={{ width: "60%", backgroundColor: "#0052CC", m: 1, mx: 30 }} type="submit"
                            variant="contained"

                        >Register</Button>
                        <NavLink style={{
                            textDecoration: "none",

                        }}
                            to="/login">
                            <Button sx={{ mx: 50 }} variant="text">Already Register ? Please Login</Button>
                        </NavLink>
                    </form>
                </Box>

            </Container>
            <Footer />
        </>
    );
};

export default Registration;