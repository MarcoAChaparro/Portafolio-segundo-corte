import { useState } from 'react'
import Pagina from '/src/assets/Portafolio/Pagina';
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
