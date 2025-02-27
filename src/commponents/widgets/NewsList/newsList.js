import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { URL } from '../../../config'
import styles from './newslist.css'
import Button from '../buttons/button'
import CardInfo from '../cardinfo/cardinfo'

export default class NewsList extends Component {

    state = {
        teams: [],
        items: [],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount
    }

    componentWillMount() {
        this.request(this.state.start, this.state.end)
    }



    sample = (start, end) => {
        axios.get(`${URL}/articles`)
            .then(response => {
                console.log(response.data[0].name);
                console.log('1')
            })

        console.log('2')

    }



    request = (start, end) => {

        if (this.state.teams.length < 1) {
            axios.get(`${URL}/teams`)
                .then(response => {
                    this.setState({
                        teams: response.data
                    })
                })
        }


        axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
            .then(response => {
                this.setState({
                    items: [...this.state.items, ...response.data]
                })
            })

    }

    renderNews = (type) => {
        let template = null;
        switch (type) {
            case ('card'):
                template = this.state.items.map((item, i) => (
                    <CSSTransition

                        classNames={{
                            enter: styles.newslist_wrapper,
                            enterActive: styles.newslist_wrapper_enter
                        }}
                        timeout={500}
                        key={i}

                    >
                        <div key={i}>
                            <div className={styles.newslist_item}>
                                <Link to={`/articles/${item.id}`}>
                                    <CardInfo teams={this.state.teams} team={item.team} date={item.date} />
                                    <h2>{item.title}</h2>
                                </Link>
                            </div>
                        </div>
                    </CSSTransition>
                ))
                break;

            default:
                template = null;
                break;
        }
        return template;
    }

    loadMore = () => {
        var end = this.state.end + this.state.amount;
        this.request(this.state.end, end)
    }


    render() {
        return (
            <div>
                <TransitionGroup
                    component="div"
                    className="list"
                >
                    {this.renderNews(this.props.type)}
                </TransitionGroup>
                <Button
                    type="loadmore"
                    loadMore={() => this.loadMore()}
                    cta="Load More News"
                />

            </div>

        )
    }
}
