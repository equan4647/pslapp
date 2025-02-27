import React from 'react';
//import FontAwesome from 'react-fontawesome;'
import styles from './cardinfo.css'
const CardInfo = (props) => {

    const teamName = (teams, team) => {
        let data = teams.find((item) => {
            return item.id === team
        });

        if (data) {
            return data.name;
        }
    }

    return (
        <div className={styles.cardInfo}>
            <span className={styles.teamname}>
                {teamName(props.teams, props.team)}
            </span>
            <span className={styles.date}>
                {props.date}
            </span>
        </div>
    )
}
export default CardInfo 