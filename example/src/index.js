import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import Resizer from './Resizer.js'

class App extends PureComponent {
  render () {
    return <div><Resizer /><Resizer /></div>;
  }
}

const initExample = (rootElement = document.getElementById('root')) => ReactDOM.render(
  <App />,
  rootElement
)

export { initExample }
