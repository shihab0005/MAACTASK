import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import hero from '../../images/hero.png'
const Header = () => {
    return (
        <Box>
            <Typography sx={{
                fontWeight: 800,
                fontSize: "60px",
                lineHeight: "130%",
                textAlign: "center",
                mt: 15,
                mx: 15,
                mb: 5
            }}>Analytics that transform your product inside-out</Typography>

            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 7
            }}>

                <Button variant="contained" sx={{
                    mr: 2,
                    backgroundColor: "#0052CC",
                    borderRadius: "8px",
                    px: 10,
                    py: 3,
                    fontSize: 22,
                    color: "#fff",
                    fontWeight: 600,
                    textTransform: "capitalize"
                }}>Request for Demo</Button>

                <Button variant="outlined" sx={{
                    background: "#F2F7FF",
                    border: "1px solid #0052CC",
                    borderRadius: "8px",
                    px: 10,
                    py: 3,
                    fontSize: 22,
                    boxShadow: "5px 5px 5px #0052CC",
                    color: "#0052CC",
                    fontWeight: 600,
                    textTransform: "capitalize"
                }}>Download</Button>

            </Box>
            <Box sx={{ mx: 10 }}>

                <img src={hero} width="100%" alt="" />
            </Box>

        </Box>
    );
};

export default Header;