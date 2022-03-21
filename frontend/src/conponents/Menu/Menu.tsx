import React from 'react';
import styles from './Menu.module.scss';
import {NavLink} from 'react-router-dom';

export default function Menu() {

  return (
    <div className={styles.Menu}>
      <NavLink to='/' style={({ isActive }) => ({
                              color: isActive ? '#fff' : '',
                              background: isActive ? 'rgba(0, 0, 0, 0.9)' : '',})}>Профиль</NavLink>
      <NavLink to='/messages' style={({ isActive }) => ({
                              color: isActive ? '#fff' : '',
                              background: isActive ? 'rgba(0, 0, 0, 0.9)' : '',})}>Сообщения</NavLink>
    </div>
  );
}
