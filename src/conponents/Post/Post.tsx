import React from 'react';
import styles from './Post.module.scss';
import avatar from '../../images/cat.jpg';

export default function Post(props: any) {

    let postsDatas = props.postsData.map((elem: any, key: number) => {
        return (
            <div key={key} className={styles.Post}>
                <div className={styles.Post_viver}>
                    <div className={styles.header_post}>
                        <img src={avatar} alt="" />
                        <p>{elem.name}</p>
                    </div>

                    <div className={styles.footer_post}>
                        <p>{elem.text_post}</p>
                    </div>
                </div>
            </div>
        );
    });

    return postsDatas;
}
