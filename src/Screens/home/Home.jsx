import React from 'react';
import { MenuItem, TextField } from '@mui/material';
import './Home.css';

function Home() {
    const categories = [
        {
            value: 'General Knowledge',
            label: '$',
        },
        {
            value: 'Science',
            label: '€',
        },
        {
            value: 'Politics',
            label: '฿',
        },
        {
            value: 'History',
            label: '¥',
        },
    ];

    return (
        <div className='Home'>
            <div className='Home-settings'>
                <span style={{ fontSize: 30 }}>Settings</span>
                <div className='Home-options'>
                    <TextField
                        label='Username'
                        variant='standard'
                        style={{ marginBottom: 25 }}
                    />
                    <TextField
                        select
                        label="Categories"
                        variant="standard"
                        style={{ marginBottom: 25 }}
                    >
                        {categories.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.value}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
            </div>
            <img src='../../question.jpg' className='Home-image' alt="quiz image" />
        </div>
    )
}

export default Home;