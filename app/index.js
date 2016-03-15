import React from 'react';
import {render} from 'react-dom'

require('./public/sass/style.scss')

class HelloWorld extends React.Component {
  render() {
    return <h1>Hello World!</h1>
  }
}

render(
  <HelloWorld />,
  document.getElementById('app')
)
