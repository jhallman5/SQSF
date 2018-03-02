import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Home from './containers/Home'

import store from './store'

const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
)

ReactDOM.render( <App />, document.getElementById('app'))
