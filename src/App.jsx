import { useState } from 'react'
import './App.css'
import ImageManipulation from './component/ImageManipulation'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <ImageManipulation/> */}

     <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
