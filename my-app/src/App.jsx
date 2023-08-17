import './App.css'
import React from 'react'
import { useState, useEffect } from 'react'
import { Bar } from './components/bar.jsx'
import { Main } from './components/main'
import { Footer } from './components/footer'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const changeState = () => setIsLoading(!isLoading)
    const timer =setTimeout(changeState, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="wrapper">
      <div className="container">
        <Main isLoading={isLoading}/>
        <Bar isLoading={isLoading}/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
