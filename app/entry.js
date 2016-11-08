import React from 'react'
import {render} from 'react-dom'
import Todos from './Components/Todos'
import './style.scss'

render(
  <Todos />,
  document.getElementById('app')
)
