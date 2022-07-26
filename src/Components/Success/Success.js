import { Grid, Typography } from '@mui/material';

import React from 'react';
import platform from '../../images/monitor-mobbile.svg'
import users from '../../images/people.svg'
import singleUser from '../../images/user.svg'
import cup from '../../images/cup.svg'
const Success = () => {
    return (

        <Grid spacing={2} sx={{ 
            display: "flex",
             justifyContent: "space-between", 
             alignItems: "center",
              mx: 15, 
              mt: 5 }}>

            <Grid item xs={6} md={6} lg={3}>

                <img src={platform} alt="" />

                <Typography variant="h4" sx={{
                     color: "#0052CC",
                      fontWeight: 700, 
                      mt: 1, 
                      mb: 2 }}>10+</Typography>

                <Typography variant="h5" sx={{ 
                    color: "#A6A6A6", 
                    ml: -6 }}>Platforms Created</Typography>

            </Grid>
            <Grid item xs={6} md={6} lg={3}>
                <img src={users} alt="" />
                <Typography variant="h4" sx={{
                     color: "#0052CC",
                      fontWeight: 700,
                       mt: 1,
                        mb: 2 }}>1559+</Typography>

                <Typography variant="h5" sx={{ 
                    color: "#A6A6A6", 
                    ml: -2 }}>Total Users</Typography>
            </Grid>

            <Grid item xs={6} md={6} lg={3}>

                <img src={singleUser} alt="" />

                <Typography variant="h4" sx={{ 
                    color: "#0052CC", 
                    fontWeight: 700, 
                    mt: 1,
                     mb: 2 }}>13+</Typography>

                <Typography variant="h5" sx={{ 
                    color: "#A6A6A6",
                     ml: -4 }}>Total Clients</Typography>
            </Grid>
            <Grid item xs={6} md={6} lg={3}>
                <img src={cup} alt="" />
                <Typography variant="h4" sx={{
                     color: "#0052CC",
                      fontWeight: 700, 
                      mt: 1, 
                      mb: 2, 
                      ml: -2 }}>300 Days</Typography>

                <Typography variant="h5" sx={{ 
                    color: "#A6A6A6",
                     ml: -3 }}>In Operations</Typography>
            </Grid>
        </Grid>
    );
};

export default Success;