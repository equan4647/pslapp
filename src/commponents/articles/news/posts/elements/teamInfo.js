import React from 'react'
import styles from '../../../styles.css'

const teamInfo = (props) => {
    return (
        <div className={styles.articleTeamHeader}>
            <div className={styles.left}
                style={{
                    background: `url('/images/logos/${props.team.logo}')`
                }}
            >

            </div>
            <div className={styles.right}>
                <div >
                    <span>
                        {props.team.city} {props.team.name}
                    </span>
                </div>
                <strong>
                    W{props.team.stats[0].wins}-L{props.team.stats[0].defeats}
                </strong>

            </div>

        </div>
    )
}
export default teamInfo;