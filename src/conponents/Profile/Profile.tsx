import React, {useState} from 'react';
import styles from './Profile.module.scss';
import Post from '../Post/Post';

export default function Profile(props:any) {

    const [newTweet, SetNewTweet] = useState('');

    return (
        <div className={styles.Profile}>
            <div className={styles.tweet_textarea}>
                <textarea name="" id="" onChange={ (elem:any) => {
                    SetNewTweet(elem.target.value);
                } } placeholder='Что нового ?'></textarea>
                <button onClick={ ():void =>{
                    console.log(newTweet);
                } }>Tweet</button>
            </div>
            
            <Post postsData={props.postsData}/>
        </div>
    );
}
