import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Landing from '..//src/components/Landing.jsx';
import './App.css'
import Navbar from './components/Navabar.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    
      <div>
        <Navbar/>
    
        <Landing />
        
      </div>
    
         </>
  )
}

export default App
