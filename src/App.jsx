import './App.css'
import { useState } from 'react'
import About from './components/About'
import Admin from './components/Admin'
import Create from './components/Create'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Update from './components/Update'
import Header from './shared/Header'
import Footer from './shared/Footer'





function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState(
    localStorage.user
  )
  console.log(localStorage.user)


  return (
    <>
      <div className='App'>
        <Header/>
        <About/>
        <Admin/>
        <Create/>
        <Home/>
        <Login/>
        <Update/>
        <Signup/>
        <Footer/>
      </div>
    </>
  )
}

export default App
