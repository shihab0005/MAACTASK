import React from 'react';
import { Button } from '@mui/material';
import logo from '../../images/fieldx.svg'
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <>

            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#fff", mt: 3, mx: 10 }}>
                <Box>
                    <img src={logo} alt="" style={{ width: "130px" }} />
                </Box>
                <Box>
                    {/* <NavLink style={{ textDecoration: 'none' }} to="/dashboard"><Button>Dashboard</Button></NavLink> */}
                    <NavLink style={{ textDecoration: 'none' }} to="/login">
                        <Button variant="contained" sx={{
                            mr: 2,
                            backgroundColor: "#0052CC",
                            borderRadius: "8px",
                            px: 4,
                            py: 1,
                            fontSize: 18
                        }}>Login</Button>
                    </NavLink>


                    <NavLink style={{ textDecoration: 'none' }} to="/registration">
                        <Button variant="outlined" sx={{
                            background: "#F2F7FF",
                            border: "1px solid #0052CC",
                            borderRadius: "8px",
                            boxShadow: "2px 2px 2px #0052CC",
                            px: 4,
                            py: 1,
                            fontSize: 18
                        }}>Register</Button>
                    </NavLink>


                </Box>

            </Box>
            <hr />
        </>
    );
};

export default Nav;