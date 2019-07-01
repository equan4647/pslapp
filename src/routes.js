import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './commponents/home/home';
import Layout from './hoc/layout/layout'
import NewsArticle from './commponents/articles/news/posts/index';
import VideoArticles from './commponents/articles/videos/video/index'

class Routes extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/articles/:id' exact component={NewsArticle}></Route>
                    <Route path='/videos/:id' exact component={VideoArticles}></Route>
                </Switch>
            </Layout>
        )
    }
}
export default Routes;