import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from './Registration.module.scss';

export default function Registration(){

    const [Name, SetName] = useState('');
    const [ErrorName, SetErrorName] = useState(false);
    const [ErrorNameText, SetErrorNameText] = useState('');

    const [Surname, SetSurname] = useState('');
    const [ErrorSurname, SetErrorSurname] = useState(false);
    const [ErrorSurnameText, SetErrorSurnameText] = useState('');
    
    const [Email, SetEmail] = useState('');
    const [ErrorLogin, SetErrorLogin] = useState(false);
    const [ErrorLiginText, SetErrorLoginText] = useState('');

    const [Password, SetPassword] = useState('');
    const [ErrorPassword, SetErrorPassword] = useState(false);
    const [ErrorPasswordText, SetErrorPasswordText] = useState('');

    const [TwicePassword, SetTwicePassword] = useState('');
    const [ErrorTwicePassword, SetErrorTwicePassword] = useState(false);
    const [ErrorTwicePasswordText, SetErrorTwicePasswordText] = useState('');

    const [ValidForm, SetValidForm] = useState(false);

    useEffect(()=>{
        if(Email && Password && Name && Surname && TwicePassword){
            if(!ErrorLiginText && !ErrorPasswordText && !ErrorNameText && !ErrorSurnameText && !ErrorTwicePasswordText){
                SetValidForm(false);   
            }else{
                SetValidForm(true);
            }
        }else{
            SetValidForm(true);
        }

    }, [ErrorLiginText, ErrorPasswordText, Email, Password, Name, Surname, ErrorNameText, ErrorSurnameText, TwicePassword, ErrorTwicePasswordText]);

    const ValidName = (event: any) =>{
        if(event.trim() === ''){
            SetErrorName(true);
            SetErrorNameText('Поле не может быть пустым');
        }else{
            SetName(event);
            SetErrorName(false);
            SetErrorNameText('');
        }
    }

    const ValidSurname = (event: any) =>{
        if(event.trim() === ''){
            SetErrorSurname(true);
            SetErrorSurnameText('Поле не может быть пустым');
        }else{
            SetSurname(event);
            SetErrorSurname(false);
            SetErrorSurnameText('');
        }
    }

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
        SetPassword(event);
        
        if(event.length < 3 || event.length > 15){
            SetErrorPassword(true);

            if(event.trim() === ''){
                SetErrorPasswordText('Поле пароль не может быть пустым');
            }else{
                SetErrorPasswordText('Пароль должен быть не менее 3-х и не более 15-ти символов');
            }

        }else{
            if(TwicePassword !== '' && TwicePassword !== event){
                SetErrorPassword(true);
                SetErrorPasswordText('Пароли не совпадают');
            }else{
                SetErrorPassword(false);
                SetErrorPasswordText('');

                SetErrorTwicePassword(false);
                SetErrorTwicePasswordText('');
            }
        }
    }

    const ValidTwicePassword = (event:any) =>{
        SetTwicePassword(event);

        if(Password !== event){
            SetErrorTwicePassword(true);

            if(event.trim() === ''){
                SetErrorTwicePasswordText('Поле не может быть пустым');
            }else{
                SetErrorTwicePasswordText('Пароли не совпадают');
            }

        }else{
            SetErrorTwicePassword(false);
            SetErrorTwicePasswordText('');

            SetErrorPassword(false);
                SetErrorPasswordText('');
        }
    }


    function LoginForm ():any{
        // dispatch();
    }

    return(
        <div className={styles.registration_block}>
            <h1>Регистрация</h1>

            <div className={styles.form}>

                <div className={styles.form_child}>
                    <label htmlFor="surname_input">Фамилия</label>
                    <input type="text" id='surname_input' onChange={(event)=>ValidSurname(event.target.value)} />
                    {(ErrorSurname) ? <span className={styles.ErrorValidate}>{ErrorSurnameText}</span> : null}
                </div>

                <div className={styles.form_child}>
                    <label htmlFor="name_input">Имя</label>
                    <input type="text" id='name_input' onChange={(event)=>ValidName(event.target.value)} />
                    {(ErrorName) ? <span className={styles.ErrorValidate}>{ErrorNameText}</span> : null}
                </div>

                <div className={styles.form_child}>
                    <label htmlFor="login_input">Email</label>
                    <input type="email" id='login_input' onChange={(event)=>ValidLogin(event.target.value)} />
                    {(ErrorLogin) ? <span className={styles.ErrorValidate}>{ErrorLiginText}</span> : null}
                </div>

                <div className={styles.form_child}>
                    <label htmlFor="password_input">Пароль</label>
                    <input type="password" id='password_input' onChange={(event) => ValidPassword(event.target.value)} />
                    {(ErrorPassword) ? <span className={styles.ErrorValidate}>{ErrorPasswordText}</span> : null}
                </div>

                <div className={styles.form_child}>
                    <label htmlFor="password_input">Повторите пароль</label>
                    <input type="password" id='twice_password_input' onChange={(event) => ValidTwicePassword(event.target.value)} />
                    {(ErrorTwicePassword) ? <span className={styles.ErrorValidate}>{ErrorTwicePasswordText}</span> : null}
                </div>

                <button disabled={ValidForm} type="button" className={styles.Login_btn} onClick={LoginForm}>Войти</button>

                <div className={styles.registration_arae}>
                    <span>Уже есть учетная запись? </span> <NavLink to="/">Войти</NavLink>    
                </div>
            </div>
        </div>
    );
}