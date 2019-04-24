import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './newComponents/Home'
import Post from './newComponents/Post'

const App = () => (
  <Router>
    <div>
      <main>
        <Route exact path='/' component={Home} />
        <Route path='/post/:slug' component={Post} />
      </main>
    </div>
  </Router>
)

export default App
