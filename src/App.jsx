import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Pagina from './assets/Portafolio/pagina'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className='App'>
      <Pagina/>
      </div>

    </>
  )
}

export default App
