import './App.css';
import Header from './Components/Common/Header/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ComparePage from './Pages/ComparePage';
import HomePage from './Pages/HomePage';
import DashboardPage from './Pages/DashboardPage';
import Coins from './Components/Coin/Coins';
import { useState } from 'react';


function App() {
  const [fav, setFav] = useState({});

  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/compare' element={<ComparePage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/coin/:id' element={<Coins />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
