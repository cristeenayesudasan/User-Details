import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Signup from './components/Signup'
import Task from './components/Task'
import Index from './components/Index'
import { Details } from './components/Details'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Details/>
      {/* <Index/> */}
      {/* <Signup user={{myname:'Tiya', email:'tiya@gmail.com'}}/> */}
    </>
  )
}

export default App
