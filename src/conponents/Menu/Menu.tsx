import React from 'react';
import styles from './Menu.module.scss';
import {NavLink} from 'react-router-dom';

export default function Menu() {

  return (
    <div className={styles.Menu}>
      <NavLink to='/'>Профиль</NavLink>
      <NavLink to='/messages'>Сообщения</NavLink>
    </div>
  );
}
