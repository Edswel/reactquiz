import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, MenuItem, TextField } from '@mui/material';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import MessageBox from '../../components/messageBox/MessageBox';

function Home({ fetchQuestions }) {
    const [category, setCategory] = useState('');
    const [error, setError] = useState(false);
    const [cat, setCat] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategories = async (category = '') => {
            try {
                let cats = [];
                const response = await axios.get(`http://localhost:3000/categories`);
                cats = response.data.map((c) => (c.category));
                console.log(cats);
                setCat(cats);
            } catch (error) {
                <MessageBox>{error}</MessageBox>;
            }
        }
        fetchCategories(category);
    }, []);
    // console.log(cat + ' cats');
    // data.map((c) => (
    //     console.log(c.category)
    // ));

    const handleSubmit = () => {
        if (!category) {
            setError(true);
        } else {
            setError(false);
            fetchQuestions(category);
            navigate('/quiz');
        }
    }

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
                    {error && <MessageBox>Kindly fill out all required fields.</MessageBox>}
                    {cat}
                    <TextField
                        label='Username'
                        variant='standard'
                    // style={{ marginBottom: 25 }}
                    />
                    <TextField
                        select
                        label="Categories"
                        variant="standard"
                        style={{ marginBottom: 30 }}
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                    >
                        {categories.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.value}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Button variant='contained' size='large' onClick={handleSubmit}>Start Quiz</Button>
                </div>
            </div>
            <img src='../../question.jpg' className='Home-image' alt="quiz image" />
        </div>
    )
}

export default Home;