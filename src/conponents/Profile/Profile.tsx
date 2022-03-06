import React, {useState, useRef} from 'react';
import styles from './Profile.module.scss';
import Post from '../Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import {addPostReducer} from '../../store/reducer';

export default function Profile(props:any) {
    const dispatch = useDispatch();
    const postsData = useSelector( (state:any) => state.postsData);

    const [newTweet, SetNewTweet] = useState({});

    const textArea_newPost:any = useRef('');

    const ADD_POST = () =>{
        dispatch(addPostReducer(newTweet));
        textArea_newPost.current.value = '';
    }

    return (
        <div className={styles.Profile}>
            <div className={styles.tweet_textarea}>
                <textarea ref={textArea_newPost} value={textArea_newPost.current.value} name="" id="" onChange={ 
                    (elem:any) => {
                        SetNewTweet({ name: 'Карл Марков', text_post: elem.target.value});
                    } 
                } placeholder='Что нового ?'></textarea>

                <button onClick={ ADD_POST }>Tweet</button>
            </div>
            
            <Post postsData={postsData}/>
        </div>
    );
}
