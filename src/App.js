import './App.css'
import Home from './pages/Home'
import Admin from './pages/Admin'
import Users from './pages/Users'
import LoginPage from './pages/Login'
import Register from './pages/Register'
import Pedidos from './pages/Users/Pedidos'
import Arquivos from './pages/Users/Arquivos'

import {BrowserRouter as Router, Route, Routes, } from 'react-router-dom';

function App() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/pedidos" element={<Pedidos />} />
            <Route path='/arquivos' element={<Arquivos />} />
          </Routes>          
        </div>
      </Router>
     
    );
  }
  
  export default App;
