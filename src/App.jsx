import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Header from './components/header/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="App" style={{ backgroundColor: '#0cbaba', backgroundImage: 'linear-gradient(315deg, #0cbaba 0%, #380036 100%)' }} >
        <Header />
      </div>
    </BrowserRouter>
  )
}

export default App;