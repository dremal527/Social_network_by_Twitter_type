import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { set_authorize } from '../../Redux/reducerAuthorize';
import styles from './Authorization.module.scss';

export default function Authorization(){
    const dispatch = useDispatch();
    
    const [Email, SetEmail] = useState('');
    const [ErrorLogin, SetErrorLogin] = useState(false);
    const [ErrorLiginText, SetErrorLoginText] = useState('');

    const [Password, SetPassword] = useState('');
    const [ErrorPassword, SetErrorPassword] = useState(false);
    const [ErrorPasswordText, SetErrorPasswordText] = useState('');

    const [ValidForm, SetValidForm] = useState(false);

    useEffect(()=>{

        if(Email && Password){
            if(!ErrorLiginText && !ErrorPasswordText){
                SetValidForm(false);   
            }else{
                SetValidForm(true);
            }
        }else{
            SetValidForm(true);
        }

    }, [ErrorLiginText, ErrorPasswordText, Email, Password])

    const ValidLogin = (event:any) =>{
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if(!emailPattern.test(event)){
            SetErrorLogin(true);
            SetErrorLoginText('Введён некорректный email');

            if(event.trim() === ''){
                SetErrorLoginText('Поле email не может быть пустым');
            }
        }else{
            SetErrorLogin(false);
            SetEmail(event);
            SetErrorLoginText('');
        }
    }

    const ValidPassword = (event:any) =>{
        if(event.length < 3 || event.length > 15){
            SetErrorPassword(true);
            SetErrorPasswordText('Пароль должен быть не менее 3-х и не более 15-ти символов');

            if(event.trim() === ''){
                SetErrorPasswordText('Поле пароль не может быть пустым');
            }
        }else{
            SetErrorPassword(false);
            SetPassword(event);
            SetErrorPasswordText('');
        }
    }


    function LoginForm ():any{
        dispatch(set_authorize(true));
    }

    return(
        <div className={styles.auth_block}>
            <h1>Авторизация</h1>
            <div className={styles.form}>
                <div className={styles.form_child}>
                    <label htmlFor="login_input">Email</label>
                    <input type="text" id='login_input' onChange={(event)=>ValidLogin(event.target.value)} />
                    {(ErrorLogin) ? <span className={styles.ErrorValidate}>{ErrorLiginText}</span> : null}
                </div>

                <div className={styles.form_child}>
                    <label htmlFor="password_input">Пароль</label>
                    <input type="password" id='password_input' onChange={(event) => ValidPassword(event.target.value)} />
                    {(ErrorPassword) ? <span className={styles.ErrorValidate}>{ErrorPasswordText}</span> : null}
                </div>

                <button disabled={ValidForm} type="button" className={styles.Login_btn} onClick={LoginForm}>Войти</button>

                <div className={styles.registration_arae}>
                    <span>Нет учетной записи? </span> <NavLink to="/registration">Зарегистрируйтесь</NavLink>    
                </div>
            </div>
        </div>
    );
}