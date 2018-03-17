import React from 'react'
import { render } from 'react-dom'

if (module.hot) {
  module.hot.accept()
}

const App = () => <h1>Hi</h1>

render(<App />, document.getElementById('app'))
