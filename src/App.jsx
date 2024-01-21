import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Accardion from './components/Accardion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Accardion/>
    </>
  )
}

export default App
