import React from 'react'
import ReactDOM from 'react-dom'
import GlobalStyle from './GlobalStyle'
import Shortly from './components/Shortly'
import './styles/index.css'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Shortly />
  </React.StrictMode>,
  document.getElementById('root')
)
