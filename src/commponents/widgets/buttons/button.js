import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../buttons/button.css';

const buttons = (props) => {
    let template = null;
    switch (props.type) {
        case 'loadmore':
            template = (
                <div className={styles.blue_btn}
                    onClick={props.loadmore}
                >
                    {props.cta}
                </div>
            );
            break;

        case 'linkto':
            template = (
                <Link to={props.LinkTo}
                    className={styles.blue_btn}>
                    {props.cta}
                </Link>
            )
            break;

        default:
            template = null;
    }

    return (template
    )
}
export default buttons;