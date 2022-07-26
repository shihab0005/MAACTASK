import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import proState from "../../images/product.png";
import proIcon from "../../images/icon.png";

const Product = () => {
    return (
        <>
            <Typography variant="body1" sx={{
                color: "#0052CC",
                fontSize: 20,
                textAlign: "center",
                mt: 5
            }}>Products Features</Typography>

            <Typography sx={{
                fontWeight: 800,
                fontSize: "60px",
                lineHeight: "130%",
                textAlign: "center",
                mt: 3,
                mx: 15
            }}>Make more out of your data</Typography>

            <Grid spacing={3} sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>

                <Grid item xs={12} md={4} lg={4} >
                    <Box>
                        <Box sx={{ mb: 10 }}>
                            <div style={{
                                display: "flex",
                                justifyContent: "flex-end",
                            }}>

                                <img src={proIcon} alt="ione"
                                />
                            </div>

                            <Typography sx={{
                                fontWeight: 700,
                                fontSize: "26px",
                                textAlign: "right"
                            }}>Real-time analytics</Typography>

                            <Typography sx={{
                                textAlign: "right",
                                fontSize: 20
                            }}>
                                See product usage, sign-ins,feature <br />metricschange as users work on your.
                            </Typography>
                        </Box>
                        <Box sx={{ mb: 10 }}>
                            <div style={{
                                display: "flex",
                                justifyContent: "flex-end",
                            }}>
                                <img src={proIcon} alt="ione"
                                />
                            </div>
                            <Typography sx={{
                                fontWeight: 700,
                                fontSize: "26px",
                                textAlign: "right"
                            }}>Intuitive dashboard</Typography>

                            <Typography variant="body1" sx={{
                                textAlign: "right",
                                fontSize: 20
                            }}>
                                See product usage, sign-ins, feature<br /> metrics change as users work on your
                            </Typography>

                        </Box>

                        <Box sx={{ mb: 10 }}>
                            <div style={{
                                display: "flex",
                                justifyContent: "flex-end",
                            }}>
                                <img src={proIcon} alt="ione"
                                />
                            </div>

                            <Typography sx={{
                                fontWeight: 700,
                                fontSize: "26px",
                                textAlign: "right"
                            }}>Smart suggestions</Typography>

                            <Typography variant="body1" sx={{
                                textAlign: "right",
                                fontSize: 20
                            }}>
                                See product usage, sign-ins, feature<br /> metrics change as users work on your.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12} md={4} lg={4}>

                    <img src={proState} alt="" />
                </Grid>

                <Grid item xs={12} md={4} lg={4}>
                    <Box >

                        <Box sx={{ mb: 10 }}>
                            <div style={{
                                display: "flex",
                                justifyContent: "flex-start",
                            }}>

                                <img src={proIcon} alt="ione"
                                />
                            </div>

                            <Typography sx={{
                                fontWeight: 700,
                                fontSize: "26px",
                                textAlign: "left"
                            }}>Multiple views</Typography>

                            <Typography variant="body1" sx={{
                                textAlign: "left",
                                fontSize: 20
                            }}>
                                See product usage, sign-ins, feature<br /> metrics change as users work on your
                            </Typography>

                        </Box>
                        <Box sx={{ mb: 10 }}>
                            <div style={{
                                display: "flex",
                                justifyContent: "flex-start",
                            }}>
                                <img src={proIcon} alt="ione"
                                />
                            </div>

                            <Typography sx={{
                                fontWeight: 700,
                                fontSize: "26px",
                                textAlign: "left"
                            }}>AI-led diagnoses</Typography>

                            <Typography variant="body1" sx={{
                                textAlign: "left",
                                fontSize: 20
                            }}>
                                See product usage, sign-ins, feature<br /> metrics change as users work on your
                            </Typography>

                        </Box>
                        <Box sx={{ mb: 10 }}>
                            <div style={{
                                display: "flex",
                                justifyContent: "flex-start",
                            }}>
                                <img src={proIcon} alt="ione"
                                />
                            </div>

                            <Typography sx={{
                                fontWeight: 700,
                                fontSize: "26px",
                                textAlign: "left"
                            }}>Responsive</Typography>

                            <Typography variant="body1" sx={{
                                textAlign: "left",
                                fontSize: 20
                            }}>
                                See product usage, sign-ins, feature<br /> metrics change as users work on your
                            </Typography>
                        </Box>

                    </Box>
                </Grid>

            </Grid >

        </>
    );
};

export default Product;