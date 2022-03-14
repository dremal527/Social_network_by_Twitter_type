import React from 'react';
import './App.scss';
import Header from './conponents/Header/Header';
import Menu from './conponents/Menu/Menu';
import Profile from './pages/Profile/Profile';
import Messages from './pages/Messages/Messages';
import { Route, Routes } from 'react-router-dom';
import Authorization from './pages/Authorization/Authorization';
import Registration from './pages/Registration/Registration';
import { useSelector } from 'react-redux';

function App(props:any) {

  const AuthUser = useSelector((state:any) => state.authorize.AuthUser);

  return (
    <div className="App">
      <Header />
      {(AuthUser) ? 
        <div className='Work_space'>
          <Menu />

          <Routes>
            <Route path='/' element={<Profile />} />
            <Route path='/messages/*' element={<Messages />} />
          </Routes>
        </div>
      :
        <div className="authorization_form">
          <Routes>
            <Route path='/' element={<Authorization />} />
            <Route path='/registration' element={ <Registration /> } />
          </Routes>
        </div>
      }
      
    </div>
  );
}

export default App;
