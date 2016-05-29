import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute} from 'react-router'

import App from './modules/App'
import About from './modules/About'
import Items from './modules/Items'
import Item from './modules/Item'
import Home from './modules/Home'

render((
  <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />

        <Route path="/items" component={Items}>
          <Route path="/items/:itemName" component={Item} />
          <Route path="/items/:itemName/:action" component={Item} />
        </Route>
        
        <Route path="/about" component={About} />
      </Route>
  </Router>

), document.getElementById('app'))

