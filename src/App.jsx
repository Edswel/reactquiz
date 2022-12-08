import axios from 'axios';
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './Screens/home/Home';
import Quiz from './Screens/quiz/Quiz';

function App() {
  const [categories, setCategories] = useState([]);
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = () => { }
  // const fetchQuestions = async (category = '') => {
  //   const { data } = await axios.get(`http://localhost:3000/categories`);
  //   data.map((c) => (
  //     console.log(c.category)
  //   ));
  // }

  return (
    <BrowserRouter>
      <div className="App" style={{ backgroundColor: '#0cbaba', backgroundImage: 'linear-gradient(315deg, #0cbaba 0%, #380036 100%)' }} >
        <Header />
        <Routes>
          <Route path='/' element={<Home categories={categories} fetchQuestions={fetchQuestions} />} exact></Route>
          <Route path='/quiz' element={<Quiz />} exact></Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App;