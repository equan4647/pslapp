
import React, { Component } from 'react';
import axios from "axios";
import { URL } from '../../../../config';
import styles from '../../styles.css';
import Header from './header';


export default class NewsArticle extends Component {

    state = {
        article: [],
        team: []
    }


    componentWillMount() {
        axios.get(`${URL}/articles?id=${this.props.match.params.id}`)
            .then(responce => {

                let article = responce.data[0];

                axios.get(`${URL}/teams?id=${article.team}`)
                    .then(responce => {
                        this.setState({
                            article,
                            team: responce.data
                        })
                    })
            }
            )
    }

    request = () => {
        axios.get()
    }



    render() {
        const article = this.state.article;
        const team = this.state.team;

        return (
            <div className={styles.articleWrapper}>
                <Header
                    teamData={team[0]}
                    date={article.date}
                    author={article.author}
                />
                <div className={styles.articleBody}>
                    <h1>{article.title}</h1>
                    <div className={styles.articleImage}
                        style={{
                            background: `url('/images/articles/${article.image}')`
                        }}
                    >
                    </div>
                    <div className={styles.articleBody}>
                        {article.body}
                    </div>

                </div>
            </div>
        );
    }
}