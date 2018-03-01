import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {

  fetchAPI(){
    fetch('/API')
      .then(response => response.json())
      .then(json => {
        console.log('json', json)
      })
      .catch(error => {
        console.log('Error', error)
      })
  }

  render(){
    return (
      <div>
        <h1>React app up and running.</h1>
        <button onClick={this.fetchAPI}>API</button>
      </div>
    )
  }
}

ReactDOM.render( <App />, document.getElementById('app'))
