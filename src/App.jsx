import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import AboutMe from './AboutMe'
import MySkills from './MySkills'
import Portfolio from './Portfolio'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <AboutMe/>
      <MySkills/>
      <Portfolio/>
    </>
  )
}

export default App
