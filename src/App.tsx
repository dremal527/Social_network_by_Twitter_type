import React from 'react';
import './App.scss';
import Header from './conponents/Header/Header';
import Menu from './conponents/Menu/Menu';
import Profile from './conponents/Profile/Profile';
import Messages from './conponents/messages/Messages';
import { Route, Routes } from 'react-router-dom';

function App(props:any) {
  return (
    <div className="App">
      <Header />
      <div className='Work_space'>
        <Menu />

        <Routes>
          <Route path='/' element={<Profile />} />
          <Route path='/messages/*' element={<Messages />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
