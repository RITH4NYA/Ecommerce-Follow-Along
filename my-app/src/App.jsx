import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Route, Routes } from 'react-router-dom'
import { Login } from './component/login.jsx'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/login' element={<Login />}
/>  </Routes>
    </>
  )
}

export default App
