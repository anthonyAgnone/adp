import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './newComponents/Home'
import Post from './newComponents/Post'
import Navigation from './newComponents/Navigation'

const App = () => (
  <Router>
    <div className='app-wrap'>
      <main>
        <Route exact path='/' component={Home} />
        <Route path='/post/:slug' component={Post} />
      </main>
      <Navigation />
    </div>
  </Router>
)

export default App
