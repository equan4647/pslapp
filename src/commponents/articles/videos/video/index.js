import React, { Component } from 'react';
import axios from 'axios';
import { URL } from '../../../../config'
import Header from './header';
import styles from '../../styles.css';
import VideosRelated from '../../../widgets/videoslist/videosrelated/videosrelated'


class VideosArticle extends Component {

    state = {
        article: [],
        team: [],
        teams: [],
        related: []
    }

    componentWillMount() {
        axios.get(`${URL}/videos?id=${this.props.match.params.id}`)
            .then(responce => {

                let article = responce.data[0];
                //    console.log(responce);
                axios.get(`${URL}/teams?id=${article.team}`)
                    .then(responce => {

                        this.setState({
                            article,
                            team: responce.data
                        })

                    });

                this.getRelated();
            }
            )
    }

    getRelated = () => {

        axios.get(`${URL}/teams`)
            .then(responce => {
                let teams = responce.data;

                axios.get(`${URL}/videos?q=${this.state.team[0].city}&_limit=3`)
                    .then(responce => {
                        this.setState({
                            teams,
                            related: responce.data
                        })
                    })
                //    console.log(this.state);
            })

    }



    render() {
        const article = this.state.article;
        const team = this.state.team;
        return (
            <div>
                <Header teamData={team[0]}></Header>
                <div className={styles.videoWrapper}>
                    <h1>{article.title}</h1>
                    <iframe
                        title="videoplayer"
                        width="100%"
                        height="300px"
                        src={`https://www.youtube.com/embed/${article.url}`}

                    ></iframe>
                </div>
                <VideosRelated
                    data={this.state.related}
                    teams={this.state.team}

                ></VideosRelated>
            </div>
        )
    }
}
export default VideosArticle;