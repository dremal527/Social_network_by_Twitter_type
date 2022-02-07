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

let userData = [
  { id_user: 1, name: "Dima" },
  { id_user: 2, name: "Oleg" },
  { id_user: 3, name: "Misha" },
];

let MessageData = [
  {id: 1, message : "Hello"},
  {id: 2, message : "Hey how are ypu ?"},
  {id: 3, message : "I'm fine, and you ?"},
];

export default function Messages() {
  return (
    <div className={styles.Messages}>
      <div className={styles.Messages_item}>
        <div className={styles.users}>
          <Users userData={userData} />
        </div>

        <div className={styles.dialog}>
          <Message messageData={MessageData} />
        </div>
      </div>
    </div>
  );
}
