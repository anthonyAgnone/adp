import React from 'react'
import { Route, withRouter } from 'react-router-dom'

import Home from './newComponents/Home'
import Post from './newComponents/Post'
import Navigation from './newComponents/Navigation'
import Header from './newComponents/Header'

const App = props => (
  <div className="app-wrap">
    {window.location.href.indexOf('post') < 1 ? <Header /> : ''}
    <main>
      <Route exact path="/" component={Home} />
      <Route path="/post/:slug" component={Post} />
    </main>
    <Navigation />
  </div>
)

export default withRouter(App)
