import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RandomButton from './components/Button'
import SpecificVerse from './components/Specific'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <>
      <h1>Bible Verse </h1>
      {/* Random verse generator */}
      <RandomButton/>
      {/* Specific verse generator */}
      <SpecificVerse/>
    </>
    </>
  )
}

export default App
