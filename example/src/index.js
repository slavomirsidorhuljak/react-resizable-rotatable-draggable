import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import Resizer from './Resizer.js'

class App extends PureComponent {
  render () {
    return <Resizer />;
  }
}

const initExample = (rootElement = document.getElementById('root')) => ReactDOM.render(
  <App />,
  rootElement
)

export { initExample }
