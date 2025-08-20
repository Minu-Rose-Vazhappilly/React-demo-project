import './App.css'
import Car from './Car'
import Employee from './Employee'
import User from './User'
import Counter from './Counter'
import { useRef } from 'react'
import Person from './Person'
import {Routes,Route} from 'react-router-dom'
import About from './About'
import Contact from './Contact'

function App() {
   const empName = "Lucas Alex"
   const userName = "Anu S Vazhappilly"
   const inputElement = useRef();
  const clickFunction = ()=>{
    alert("You clicked Me.")
  }
  const handleFocus = ()=>{
    inputElement.current.focus()
    alert(inputElement.current.value)
  }
  return (
    <>
    <Routes>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Person/>
    <Counter/>
      <div className="m-5 border rounded">
        <input ref={inputElement} type="text" placeholder="input your name here" className="form-control"></input>
        <button onClick={handleFocus} className="btn btn-primary mt-3">Get Focus</button>
      </div>
      <h1 style={{textAlign:"center",color:"blue",border:"dotted",borderColor:"red"}}>Demo Project</h1>
      <Car/>
      <div className="text-center mt-5">
        <button onClick={clickFunction} className='btn btn-success'>Click Me</button>
      </div>
        <Employee parentData={empName} isEmp = {false}/>
        <User parentData1={userName}/>
       
        
    </>
  )
}

export default App
