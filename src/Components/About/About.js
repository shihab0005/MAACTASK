import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import chart from '../../images/state.png';
import ceo from '../../images/ceo.png';

const About = () => {
    return (
        <Grid spacing={1} sx={{
            mx: 15,
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            mb: 5
        }}>
            <Grid item xs={12} md={6} lg={6}>
                <img src={chart} width="100%" alt="" />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <Typography variant="h6" sx={{
                    color: "#0052CC",
                    mb: 3
                }}>ABOUT</Typography>

                <Typography variant="h3" sx={{
                    fontWeight: 550,
                    lineHeight: "70px",
                    mb: 5
                }}>A dedicated solution for<br /> startups and enterprises</Typography>

                <Typography sx={{
                    lineHeight: "30px",
                    fontSize: 20
                }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium <br /> doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore <br />veritatis et quasi architecto beatae vitae dicta sunt explicabo.</Typography>

                <Box sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    mt: 5
                }}>
                    <Grid item xs={12} md={6} lg={6} sx={{ mr: 2 }}>
                        <img src={ceo} alt="" />
                    </Grid>

                    <Grid item xs={12} md={6} lg={6}>
                        <Typography sx={{
                            lineHeight: "30px",
                            fontSize: 20
                        }}>"Fieldx is for teams that care about<br /> their product growth."</Typography>
                        
                        <Typography variant="h6" sx={{
                            fontWeight: "bolder"
                        }}>CEO, FieldX</Typography>
                    </Grid>
                </Box>
            </Grid>

        </Grid>
    );
};

export default About;