// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, MenuItem, TextField } from '@mui/material';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import MessageBox from '../../components/messageBox/MessageBox';

function Home({ fetchQuestions }) {
    const [category, setCategory] = useState([]);
    const [option, setOption] = useState();
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3000/categories').then((data) => data.json()).then((cat) => setCategory(cat));
    }, []);

    // useEffect(() => {
    //     const fetchCategories = async (category = '') => {
    //         try {
    //             let cats = [];
    //             const response = await axios.get(`http://localhost:3000/categories`);
    //             let allCats = response.data.map((c) => (c.category));
    //             cats.push(allCats)
    //             console.log(cats);
    //             setCat(cats);
    //         } catch (error) {
    //             <MessageBox>{error}</MessageBox>;
    //         }
    //     }
    //     fetchCategories(category);
    // }, []);
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

    return (
        <div className='Home'>
            <div className='Home-settings'>
                <span style={{ fontSize: 30 }}>Settings</span>
                <div className='Home-options'>
                    {error && <MessageBox>Kindly fill out all required fields.</MessageBox>}
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
                        onChange={(e) => setOption(e.target.value)}
                    // value={option}
                    >
                        {category.map((cat, index) => (
                            <MenuItem key={index}>
                                {cat.category}
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