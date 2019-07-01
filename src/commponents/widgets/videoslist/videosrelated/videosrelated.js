import React from 'react'
import styles from '../videoslist.css'
import VideosListTemplate from '../videoslistTemp'


const Related = (props) => {
    console.log(props);
    return (

        <div className={styles.relatedWraper}>

            <VideosListTemplate
                data={props.data}
                teams={props.teams}
            />
        </div>
    )
}
export default Related
