import React, {useState} from 'react';
import styles from './Messages.module.scss';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {addMessageReducer} from '../../Redux/reducers/reducerMessage';

const Users = (props: any) => {

  let user_datas = props.userData.map((elem: any, key: number) => {
    let path = '/messages/' + elem.id_user;
    return <NavLink key={key} to={path} >{elem.name}</NavLink>
  })

  return user_datas;
}

const Message = (props: any) => {

  let message_datas = props.messageData.map((elem:any, key:number)=>{
    if(elem.person === 1){
      return (
        <div key={key}>
          <p className={styles.Message_float_1} key={key}>{elem.message}</p>
        </div>
      );
    }else{
      return (
        <div key={key}>
          <p className={styles.Message_float_0} key={key}>{elem.message}</p>
        </div>
      );
    }
    
  });

  return message_datas;
}

export default function Messages(props:any) {
  const [NewMessage, SetNewMessage] = useState('');

  const dispatch = useDispatch();

  const MessageData = useSelector((state:any) => state.message.MessageData);
  const userData = useSelector((state:any) => state.message.userData);

  const AddMessage = () =>{
    let payload = {id: Math.random(),message: NewMessage, person: Math.round(Math.random())};
    dispatch(addMessageReducer(payload));
  }

  return (
    <div className={styles.Messages}>
      <div className={styles.Messages_item}>
        <div className={styles.users}>
          <Users userData={userData} />
        </div>

        <div className={styles.dialog}>
          <div className={styles.Message_area}>
            <Message messageData={MessageData} />
          </div>

          <div className={styles.input_area}>
            <input type="text" placeholder='Hello...' onChange={(event):any =>{
                SetNewMessage(event.target.value);
            }} />

              <button onClick={AddMessage}>Send</button>
          </div>
        </div>
          
      </div>
    </div>
  );
}
