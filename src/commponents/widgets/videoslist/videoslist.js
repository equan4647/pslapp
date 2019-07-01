import React, { Component } from 'react'
import axios from 'axios'
import styles from './videoslist.css'
import { URL } from '../../../config'
import Button from '../../widgets/buttons/button'
import VideoslistTemplate from './videoslistTemp';

export default class VideosList extends Component {

    state = {
        teams: [],
        videos: [],
        start: this.props.start,
        end: this.props.amount
    }


    renderVideos = () => {
        let template = null;
        switch (this.props.type) {
            case ('card'):
                template = <VideoslistTemplate data={this.state.videos} teams={this.state.teams} />
                break;
            default:
                template = null
        }
        return template
    }
    loadmore = () => {
        let end = this.state.end + this.state.end;

        this.request(this.state.end, end);

    }

    componentWillMount() {
        this.request(this.state.start, this.state.end)
    }


    request = (start, end) => {
        if (this.state.teams.length < 1) {
            axios.get(`${URL}/teams`).then(response => {
                this.setState({
                    teams: response.data
                })
            })

        }
        axios.get(`${URL}/videos?_start=${start}&_end=${end}`).
            then(response => {
                this.setState({
                    videos: [...this.state.videos, ...response.data],
                    start,
                    end
                })
            })



    }


    renderButton = () => {
        return this.props.loadmore ?
            <Button
                type='loadmore'
                cta=" Load More Videos"
                loadmore={() => this.loadmore()}
            />
            :
            <Button type='linkto' cta="Load More sVideos" LinkTo="/videos" />
    }

    renderTitle = () => {
        return this.props.title ?
            <h3>
                <strong>PSL </strong>
                Videos
            </h3> : null
    }

    render() {

        return (
            <div className={styles.videoList_wrapper}>
                {this.renderTitle()}
                {this.renderVideos()}
                {this.renderButton()}
            </div>
        )
    }
}
