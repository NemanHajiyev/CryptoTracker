import './App.css';
import Header from './Components/Common/Header/header';
import Footer from './Components/Common/Footer/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ComparePage from './Pages/ComparePage';
import HomePage from './Pages/HomePage';
import DashboardPage from './Pages/DashboardPage';


function App() {

  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/compare' element={<ComparePage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  )
}

export default App
