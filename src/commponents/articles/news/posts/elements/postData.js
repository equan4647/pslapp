import React from 'react'
import styles from '../../../styles.css'




const postData = (props) => {
    return (
        <div className={styles.articlePostData}>
            <div>
                Date:
                <span>{props.data.date}</span>
            </div>
            <div>
                Author:
                <span>{props.data.author}</span>
            </div>

        </div>
    )
}
export default postData;