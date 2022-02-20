import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {BrowserRouter} from 'react-router-dom'

let userData = [
  { id_user: 1, name: "Dima" },
  { id_user: 2, name: "Oleg" },
  { id_user: 3, name: "Misha" },
];

let MessageData = [
  {id: 1, message : "Hello It's a prunk BRO !"},
  {id: 2, message : "Hey how are ypu ?"},
  {id: 3, message : "I'm fine, and you ?"},
];

let postsData = [
    {name: 'Карл Марков', text_post: 'Это мой первый пост в этом году'},
    {name: 'Карл Марков', text_post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus praesentium rerum, ducimus magnam temporibus inventore officiis voluptatem quisquam enim perferendis quibusdam nesciunt, blanditiis reiciendis possimus minima nobis cupiditate doloremque mollitia?'},
];

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App userData={userData} MessageData={MessageData} postsData={postsData}/>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

