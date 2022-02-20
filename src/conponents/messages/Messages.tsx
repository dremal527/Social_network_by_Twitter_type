import React from 'react';
import styles from './Messages.module.scss';
import { NavLink } from 'react-router-dom';

const Users = (props: any) => {

  let user_datas = props.userData.map((elem: any, key: number) => {
    let path = '/messages/' + elem.id_user;
    return <NavLink key={key} to={path} >{elem.name}</NavLink>
  })

  return user_datas;
}

const Message = (props: any) => {

  let message_datas = props.messageData.map((elem:any, key:number)=>{
    return <p key={key}>{elem.message}</p>
  });

  return message_datas;
}

export default function Messages(props:any) {
  return (
    <div className={styles.Messages}>
      <div className={styles.Messages_item}>
        <div className={styles.users}>
          <Users userData={props.userData} />
        </div>

        <div className={styles.dialog}>
          <Message messageData={props.MessageData} />
        </div>
      </div>
    </div>
  );
}
