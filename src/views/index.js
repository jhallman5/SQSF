import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Home from './containers/Home'
import Nav from './containers/Nav'

import store from './store'

const App = () => (
  <Provider store={store}>
    <div>
      <Nav />
      <Home />
    </div>
  </Provider>
)

ReactDOM.render( <App />, document.getElementById('app'))
