import React from 'react'
import {render} from 'react-dom'

import MainContainer from './containers/MainContainer'

require('./public/stylesheets/style.scss')

render(
  <MainContainer />,
  document.getElementById('app')
)
