
import './App.css'
import { Route, Routes } from 'react-router-dom'


import Login from './component/login'
import { Signup } from './component/signup'

function App() {
 

  return (
    <>
    <Routes>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Signup" element={<Signup/>}/>
    </Routes>
    </>
    
  )
}


export default App;