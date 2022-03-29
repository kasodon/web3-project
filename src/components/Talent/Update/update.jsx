/* tslint:disable */

import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import './update.scss'

// declare const initialValues: any = [
//     id: 0,
//     skill: [],
//     certification: {},
//     education: {},
//     years: [],
//     work: {},
// ];

const skills = [
    {
        value: 'Design',
    },
    {
        value: 'Front End Development',
    },
    {
        value: 'Back End Development',
    },
    {
        value: 'Smart contract developer',
    },
]

function Update() {
    const [skill, setskill] = useState('Design')

    const handleChange = e => {
        setskill(e.target.value)
    }

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
                    id="outlined-select-skills"
                    select
                    label="What are your skills?*"
                    fullWidth
                    value={skill}
                    onChange={handleChange}
                    helperText="search and choose multiple skills"
                >
                    {skills.map(skil => (
                        <MenuItem key={skil.value} value={skil.value}>
                            {skil.value}
                        </MenuItem>
                    ))}
                </TextField>

                <div className="certification">
                    <h3>Provide Your Certification</h3>
                    <TextField
                        id="outlined-uncontrolled"
                        label="Choose Title"
                        defaultValue="Mr"
                    />
                    <TextField
                        id="outlined-uncontrolled"
                        label="Issuing Organisation"
                        defaultValue=""
                    />
                    <TextField
                        id="outlined-uncontrolled"
                        label="Reference Number"
                        defaultValue=""
                    />
                    <TextField
                        id="date"
                        label="Date Obtained"
                        type="date"
                        defaultValue="2017-05-24"
                        sx={{ width: 220 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>

                <div className="education">
                    <h3>Educational Background</h3>
                    <TextField
                        id="outlined-uncontrolled"
                        label="Degree Obtained"
                        defaultValue=""
                    />
                    <TextField
                        id="outlined-uncontrolled"
                        label="Institution"
                        defaultValue=""
                    />
                    <TextField
                        id="date"
                        label="Start Date"
                        type="date"
                        defaultValue="2017-05-24"
                        sx={{ width: 220 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="date"
                        label="End Date"
                        type="date"
                        defaultValue="2017-05-24"
                        sx={{ width: 220 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>

                <FormControl>
                    <FormLabel id="year-row-radio-buttons-group-label">
                        How many years of experience do you have?
                    </FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="year-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel
                            value="year less"
                            control={<Radio />}
                            label="Less than a year"
                        />
                        <FormControlLabel
                            value="1 to 4 years"
                            control={<Radio />}
                            label="1 - 4 years"
                        />
                        <FormControlLabel
                            value="5 years +"
                            control={<Radio />}
                            label="5 years +"
                        />
                        <FormControlLabel
                            value="8 years +"
                            control={<Radio />}
                            label="8 years +"
                        />
                    </RadioGroup>
                </FormControl>

                <div className="work">
                    <h3>Work Experience</h3>
                    <TextField
                        id="outlined-uncontrolled"
                        label="Job Role"
                        defaultValue=""
                    />
                    <TextField
                        id="outlined-uncontrolled"
                        label="Organisation Name"
                        defaultValue=""
                    />
                    <TextField
                        id="outlined-uncontrolled"
                        label="Industry"
                        defaultValue=""
                    />
                    <TextField
                        id="date"
                        label="Start Date"
                        type="date"
                        defaultValue="2017-05-24"
                        sx={{ width: 220 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="date"
                        label="End Date"
                        type="date"
                        defaultValue="2017-05-24"
                        sx={{ width: 220 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
            </Box>
        </div>
    )
}

export default Update
