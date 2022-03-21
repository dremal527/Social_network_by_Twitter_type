import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { set_authorize } from '../../Redux/reducers/reducerAuthorize';
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

    const [ErrorAuthorize, SetErrorAuthorize] = useState('');
    const [Check_ErrorAuthorize, SetCheck_ErrorAuthorize] = useState(false);

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


    async function LoginForm (){
        let user_data = {
            Email: Email,
            Password: Password,
        }

        let query_authorize = await fetch('http://localhost/back_twitter/login.php',{
            method: 'POST',
            headers:{
                'X-Requested-With': 'XMLHttpRequest',
                'content-type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify(user_data),
        })
        .then(response => response.json());

        console.log(query_authorize);

        if(query_authorize.status){
            let date = new Date(Date.now() +60*60*24*30);
            document.cookie = `id=${query_authorize.data.id}, hash=${query_authorize.data.hash}; expires=${date}`;
            dispatch(set_authorize(true));
        }else{
            SetErrorAuthorize(query_authorize.error);
            SetCheck_ErrorAuthorize(true);
            setTimeout(()=>SetCheck_ErrorAuthorize(false), 3000);
        }
        
    }

    return(
        <div className={styles.auth_block}>

            <div hidden={!Check_ErrorAuthorize} className={styles.error_message + ( (Check_ErrorAuthorize) ? ' ' + styles.actve_error_message : '' )}>
                <span>{ErrorAuthorize}</span>
            </div>

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