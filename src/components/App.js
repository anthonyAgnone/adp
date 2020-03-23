import React from 'react'
import { Route, withRouter } from 'react-router-dom'

import Home from './newComponents/Home'
import Post from './newComponents/Post'
import About from './About'
import Commissions from './Commissions'
import Process from './Process'
import Contact from './Contact'
import Navigation from './newComponents/Navigation'
import Header from './newComponents/Header'

const App = props => (
  <div className='app-wrap'>
    <main>
      <Route exact path='/' component={Home} />
      <Route path='/post/:slug' component={Post} />
      <Route exact path='/about' component={About} />
      <Route exact path='/process' component={Process} />
      <Route exact path='/commissions' component={Commissions} />
      <Route exact path='/contact' component={Contact} />
    </main>
  </div>
)

export default withRouter(App)
