import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Home from './containers/Home'
import Navigation from './containers/Navigation'

import store from './store'

const App = () => (
  <Provider store={store}>
    <div>
      <Navigation />
      <Home />
    </div>
  </Provider>
)

ReactDOM.render( <App />, document.getElementById('app'))
