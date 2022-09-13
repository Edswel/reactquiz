import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/header/Header';
import Home from './Screens/home/Home';
import Quiz from './Screens/quiz/Quiz';

function App() {

  return (
    <BrowserRouter>
      <div className="App" style={{ backgroundColor: '#0cbaba', backgroundImage: 'linear-gradient(315deg, #0cbaba 0%, #380036 100%)' }} >
        <Header />
        <Routes>
          <Route path='/' element={<Home />} exact></Route>
          <Route path='/quiz' element={<Quiz />} exact></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;