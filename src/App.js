import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Components/UI/AppRouter';
import Navbar from './Components/UI/Navbar/Navbar';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
