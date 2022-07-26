import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import aven from '../../images/Aven.svg'
import amare from '../../images/Amara.svg'
import circle from '../../images/Circle.svg'
import kyan from '../../images/Kyan.svg'
import treva from '../../images/Treva.svg'

const Partner = () => {
    return (
        <Box>
            <Typography sx={{
                fontSize: 40,
                fontWeight: 600,
                color: "#0052CC",
                mt: 15,
                mb: 8,
                textAlign: "center"
            }}>5,000+ high-impact teams rely on Fieldx</Typography>

            <Box sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
            }}>
                <Box>
                    <img src={aven} alt="" />
                </Box>
                <Box>
                    <img src={amare} alt="" />
                </Box>
                <Box>
                    <img src={circle} alt="" />
                </Box>
                <Box>
                    <img src={kyan} alt="" />
                </Box>
                <Box>
                    <img src={treva} alt="" />
                </Box>

            </Box>

        </Box>
    );
};

export default Partner;