import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import logo2 from "../../images/white.png"
import twitter from "../../images/013-twitter.svg"
import linkdin from "../../images/010-linkedin.svg"
import facebook from "../../images/001-facebook.svg";

const Footer = () => {
    return (
        <Box sx={{
            backgroundColor: "#00193D",
            mt: 8,
            p: 15,

        }}>


            <img src={logo2} alt="" style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "170px",
            }} />
            <Typography sx={{
                mt: 5,
                fontSize: 20,
                color: "#fff", textAlign: "center"

            }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br />accusantium doloremque laudantium, totam rem aperiam eaque.</Typography>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 5,
                mb: 5
            }}>
                <Box>
                    <img src={twitter} alt="" style={{ marginRight: "40px" }} />
                    <img src={linkdin} alt="" style={{ marginRight: "40px" }} />
                    <img src={facebook} alt="" />
                </Box>

            </Box>

            <hr />
            <Typography sx={{
                mt: 5,
                textAlign: "center",
                fontSize: 27,
                color: "#fff"
            }}>© All rights reserve by <span style={{ color: "red" }}>MAAC</span> </Typography>

        </Box>

    );
};

export default Footer;