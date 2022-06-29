import React, { Fragment, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/UI/Navbar/Navbar';
import Posts from './pages/Posts';
import About from './pages/About';
import PostIdPage from './pages/PostIdPage';
import Login from './pages/Login/Login';
import './styles/App.css';
import { useState } from 'react';

export const AuthContext = React.createContext(null);

function App() {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
  }, []);

  return (
    <div>
      <AuthContext.Provider value={{
        isAuth,
        setIsAuth
      }}>
        <Navbar />
        <Routes>
          {isAuth === true
            ?
            <Fragment>
              <Route path='/Posts' element={<Posts />} />
              <Route path='/About' element={<About />} />
              <Route path='/posts/:id' element={<PostIdPage />} />
            </Fragment>
            :
            <Fragment>
              <Route path='/Login' element={<Login />} />
            </Fragment>
          }
          <Route path='*' element={<Login />} />
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
