import { Button, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useContext } from 'react';
import Context from '../Context/Context';
import AreaMain from './AreaMain/AreaMain';
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
const Area = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [area, setArea] = useState("")
    const { regionInfo } = useContext(Context);
    const [reg, setReg] = React.useState("");

    const handleOnChangeRegion = e => {
        setReg(e.target.value);
    };
    const handleOnChangeArea = e => {

        setArea(e.target.value);

    };
    const value = {
        area, reg
    }
    const handleSubmit = e => {
        const token = localStorage.getItem('token')
        fetch('https://staging-api.erpxbd.com/api/v1/area', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "token": `bearer ${token}`,
                // i can't find distination where i send token ,token key name
            },
            body: JSON.stringify(value)
        }).then(res => res.json())
            .then(data => {
                console.log(data);

            })

        e.preventDefault()
    }
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant="h6">Area List</Typography>
                <Button onClick={handleOpen} variant="contained" sx={{ px: 4, py: 1, fontSize: 17 }}> <AddIcon />Create New</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <form style={style} onSubmit={handleSubmit} >
                        <FormControl sx={{ m: 1, width: "80%" }}>
                            <InputLabel id="demo-simple-select-label">Region</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={reg}
                                label="Age"
                                onChange={handleOnChangeRegion}
                            >
                                {/* {regionInfo.map((regInfo) =>
                                    <MenuItem value={10}>{regInfo.name}</MenuItem>
                                )} */}

                            </Select>
                        </FormControl>
                        <TextField
                            sx={{ m: 1, width: "80%" }}
                            id="standard-basic3"
                            label="Area"
                            name="name"
                            onChange={handleOnChangeArea}
                            variant="standard" />
                        <Button
                            sx={{ backgroundColor: "#0B2E4E", m: 1, }} type="submit"
                            variant="contained"

                        >Add Area</Button>

                    </form>

                </Modal>
            </Box>
            {/* <AreaMain/> */}
        </>
    );
};

export default Area;