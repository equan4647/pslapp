import React from 'react'
import styles from './videoslist.css'
import { Link } from 'react-router-dom';
import CardInfo from '../cardinfo/cardinfo'

const videoslisttemp = (props) => {
    return props.data.map((item, i) => (
        <Link to={`/vidoes/${item.id}`} key={i}>


            <div className={styles.videoListItem_wrapper}>
                <div className={styles.left}
                    style={{
                        backgroundImage: `url(../images/videos/${item.image})`
                    }}
                >

                </div>
                <div className={styles.right}>
                    <CardInfo teams={props.teams} team={item.team} date={item.date} />
                    <h2>{item.title}
                    </h2>


                </div>
            </div>

        </Link >

    ));
}
export default videoslisttemp;
