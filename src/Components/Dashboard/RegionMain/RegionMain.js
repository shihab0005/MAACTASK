import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useState, useEffect } from 'react';

const RegionMain = () => {
    const [regions, setRegions] = useState({});

    useEffect(() => {
        fetch("https://staging-api.erpxbd.com/api/v1/region/20/1")
            .then(res => res.json())
            .then(data => setRegions(data))
    }, [])
    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right"> Name</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {regions.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>



                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default RegionMain;