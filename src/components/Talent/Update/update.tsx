// import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import './update.scss'

// declare const initialValues: any = [
//     id: 0,
//     skill: [],
//     certification: {},
//     education: {},
//     years: [],
//     work: {},
// ];

function Update() {
    // const [values, setValue] = useState('');

    return (
        <div className="update">
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField
                    id="standard-basic"
                    label="Standard"
                    variant="standard"
                />
            </Box>
        </div>
    )
}

export default Update
