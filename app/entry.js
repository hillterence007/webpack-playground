import React from 'react'
import {render} from 'react-dom'
import Todos from './Components/Todos'
import './Style/main.scss'

render(
  <Todos />,
  document.getElementById('app')
)
