import React, {useState} from 'react';
import styles from './Profile.module.scss';
import Post from '../Post/Post';

export default function Profile() {

    const [newTweet, SetNewTweet] = useState('');

    let postsData = [
        {name: 'Карл Марков', text_post: 'Это мой первый пост в этом году'},
        {name: 'Карл Марков', text_post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus praesentium rerum, ducimus magnam temporibus inventore officiis voluptatem quisquam enim perferendis quibusdam nesciunt, blanditiis reiciendis possimus minima nobis cupiditate doloremque mollitia?'},
    ];

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
            
            <Post postsData={postsData}/>
        </div>
    );
}
