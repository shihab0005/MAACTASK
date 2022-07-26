import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { useContext } from 'react';
import Context from '../Context/Context';
import RegionMain from './RegionMain/RegionMain';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,

    border: '2px solid #C5C9C6',
    boxShadow: 24,
    p: 4,
};
const Region = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [region, setRegion] = useState({});
    const { setRegionInfo } = useContext(Context)
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegionData = { ...region }
        newRegionData[field] = value;
        console.log(newRegionData);
        setRegion(newRegionData);
    }
    const handleSubmit = e => {
        const token = localStorage.getItem('token')
        fetch('https://staging-api.erpxbd.com/api/v1/region', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "token": `bearer ${token}`
                //i don,t understand the token key ,where i send the token?
            },
            body: JSON.stringify(region)
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                setRegionInfo(data)

            })

        e.preventDefault()
    }
    return (
        <>

            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant="h6">Region List</Typography>
                <Button onClick={handleOpen} variant="contained" sx={{ px: 4, py: 1, fontSize: 17 }}> <AddIcon />Create New</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <form style={style} onSubmit={handleSubmit} >
                        <TextField
                            sx={{ m: 1, width: "80%" }}
                            id="standard-basic3"
                            label="Region"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <Button
                            sx={{ backgroundColor: "#0B2E4E", m: 1, }} type="submit"
                            variant="contained"

                        >Add Region</Button>

                    </form>

                </Modal>
            </Box>
            {/* <RegionMain /> */}
        </>
    );
};

export default Region;