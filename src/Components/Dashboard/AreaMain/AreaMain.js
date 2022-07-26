import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useState, useEffect, useContext } from 'react';
import Context from '../../Context/Context';

const AreaMain = () => {
    const [areas, setareas] = useState({});
    const { regionInfo } = useContext(Context);
    useEffect(() => {
        fetch(`https://staging-api.erpxbd.com/api/v1/area/All/5/1?name=${regionInfo.name}`)
            .then(res => res.json())
            .then(data => setareas(data))
    }, [regionInfo.name])
    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Serial</TableCell>
                            <TableCell align="right"> Region</TableCell>
                            <TableCell align="right"> Area</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {areas.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                
                                <TableCell component="th" scope="row">
                                    {regionInfo.name}
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

export default AreaMain;