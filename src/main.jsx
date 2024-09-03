import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <div className='dark:bg-white dark:text-black'>
  <App  />
  </div>
    </BrowserRouter>
)
